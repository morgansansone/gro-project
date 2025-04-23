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


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
