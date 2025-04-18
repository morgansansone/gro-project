const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '34.60.213.37',
  database: 'growTest1',
  password: '1234',
  port: 5432,
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Successfully connected to PostgreSQL database!');
      console.log('Current time from database:', res.rows[0]);
    }
  });

module.exports = {
  query: (text, params) => pool.query(text, params),
};
