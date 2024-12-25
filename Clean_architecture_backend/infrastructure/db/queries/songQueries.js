const pool = require("../index");

const getAllSongs = async () => {
    try {
        const result = await pool.query('SELECT * FROM songs');
        return result.rows;
    } catch (error) {
        console.error("Error fetching songs:", error);
        throw error;
    }
}

module.exports = { getAllSongs };


