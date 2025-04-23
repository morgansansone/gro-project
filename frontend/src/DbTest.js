import React, { useState, useEffect } from 'react';

function DbTest() {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDbTest() {
      try {
        const response = await fetch('http://localhost:5000/api/db-test');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDbData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchDbTest();
  }, []);

  if (loading) return <p>Testing database connection...</p>;
  if (error) return <p>Error connecting to database: {error}</p>;

  return (
    <div>
      <h2>Database Connection Test</h2>
      <p>Status: {dbData.success ? 'Connected' : 'Failed'}</p>
      <p>Message: {dbData.message}</p>
      {dbData.data && <p>Database Time: {JSON.stringify(dbData.data)}</p>}
    </div>
  );
}

export default DbTest;
