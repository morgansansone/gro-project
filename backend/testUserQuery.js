const db = require('./db');

async function testUserQuery() {
  try {
    const emailToTest = 'alice@example.com'; // Change this to an email you know exists in your User table
    const result = await db.query('SELECT * FROM public."User" WHERE email = $1', [emailToTest]);
    if (result.rows.length === 0) {
      console.log('No user found with email:', emailToTest);
    } else {
      console.log('User found:', result.rows);
    }
  } catch (err) {
    console.error('Error querying user:', err);
  } finally {
    process.exit();
  }
}

testUserQuery();
