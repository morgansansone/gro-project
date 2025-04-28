const db = require('./db');

async function testConnection() {
  try {
    const result = await db.query('SELECT NOW()');
    console.log('Database connection successful!');
    console.log('Current database time:', result.rows[0]);
    
    // Test a more complex query if you have tables set up
    const users = await db.query('SELECT displayname FROM public."User"');
    console.log('Sample data:', users.rows);
  } catch (err) {
    console.error('Database connection error:', err);
  } finally {
    // If you're using a client instead of a pool, you would end the connection here
    // For a pool, this is optional as the pool manages connections
    process.exit();
  }
}

testConnection();
