const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Database test endpoint
app.get('/api/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({
      success: true,
      message: 'Database connection successful',
      data: result.rows[0]
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
      error: err.message
    });
  }
});

// ── 4) Registration endpoint ──────────────────────────────────────────────
app.post('/api/register', async (req, res) => {
  console.log('🔐 Register attempt:', req.body);
  const { displayname, email, password } = req.body;

  if (!displayname || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: 'Name, email & password are required' });
  }

  try {
    // 1. Check if the email is already registered
    const exists = await db.query(
      `SELECT 1 FROM public."User" WHERE email = $1`,
      [email]
    );
    if (exists.rows.length) {
      return res
        .status(409)
        .json({ success: false, message: 'Email already registered' });
    }

    // 2. Find an available (unclaimed) accountid
    const result = await db.query(`
      SELECT accountid FROM public.account
      WHERE accountid NOT IN (
        SELECT accountid FROM public."User"
      )
      LIMIT 1
    `);

    if (!result.rows.length) {
      return res
        .status(500)
        .json({ success: false, message: 'No available account IDs' });
    }

    const availableAccountId = result.rows[0].accountid;

    // 3. Insert the new user with that accountid
    await db.query(
      `INSERT INTO public."User"
        (displayname, email, password,
         securityq1, q1a,
         securityq2, q2a,
         accountid, allocatedfunds)
       VALUES
        ($1, $2, $3,
         'Blank Q1', 'A1',
         'Blank Q2', 'Q2',
         $4, $5)`,
      [displayname, email, password, availableAccountId, 0]
    );

    res.json({ success: true, message: 'Account created successfully' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ success: false, message: 'Server error during registration' });
  }
});

// Login endpoint with database authentication
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "Email and password required" 
      });
    }

    // 1. Authenticate user
    const userResult = await db.query(
      `SELECT displayname, email, password, allocatedfunds 
       FROM public."User" 
       WHERE email = $1 AND password = $2`,
      [email, password]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials" 
      });
    }

    // 2. Get user's goals
    const goalsResult = await db.query(
      `SELECT goalname, plant, current, target 
       FROM public."goal" 
       WHERE email = $1`,
      [email]
    );

    // 3. Format response
    const userData = {
      ...userResult.rows[0],
      plants: goalsResult.rows.map(goal => ({
        goalName: goal.goalname,
        plantType: goal.plant,
        currentAmount: goal.current,
        targetAmount: goal.target
      }))
    };

    res.json({
      success: true,
      user: userData
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({
      success: false,
      message: "Server error during login"
    });
  }
});

// Create Goal Endpoint
app.post('/api/create-goal', async (req, res) => {
  try {
    const { email, goalName, targetAmount, plantType } = req.body;

    // Validate input
    if (!email || !goalName || !targetAmount || !plantType) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Check existing goals count
    const goalsCount = await db.query(
      'SELECT COUNT(*) FROM public."goal" WHERE email = $1',
      [email]
    );
    
    if (parseInt(goalsCount.rows[0].count) >= 3) {
      return res.status(400).json({
        success: false,
        message: 'Maximum of 3 goals allowed'
      });
    }

    // Insert new goal
    await db.query(
      `INSERT INTO public."goal" 
        (email, goalname, plant, target, current)
       VALUES ($1, $2, $3, $4, $5)`,
      [email, goalName, plantType, targetAmount, 0]
    );

    res.json({
      success: true,
      message: 'Goal created successfully'
    });

  } catch (err) {
    console.error('Goal creation error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error during goal creation'
    });
  }
});

//Update goal endpoint
app.post('/api/update-goals', async (req, res) => {
  try {
    const { email, plants } = req.body;
    
    // Update all goals in a transaction
    await db.query('BEGIN');
    
    for (const plant of plants) {
      await db.query(
        `UPDATE public."goal" 
         SET current = $1
         WHERE email = $2 AND goalname = $3`,
        [plant.currentAmount, email, plant.goalName]
      );
    }
    
    await db.query('COMMIT');
    
    res.json({ success: true });
  } catch (err) {
    await db.query('ROLLBACK');
    console.error('Goal update error:', err);
    res.status(500).json({ success: false, message: 'Failed to update goals' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
