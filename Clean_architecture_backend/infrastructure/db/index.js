const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // "postgresql://neondb_owner:5vbfgKJYU2eN@ep-fancy-mountain-a54xqgr7.us-east-2.aws.neon.tech/neondb?sslmode=require"
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}