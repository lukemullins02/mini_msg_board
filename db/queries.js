const pool = require("./pool");

async function insertPost(text, username, added) {
  await pool.query(
    "INSERT INTO messages (text,username,added) VALUES ($1,$2,$3)",
    [text, username, added],
  );
}

async function getAllPosts() {
  const rows = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getPost(id) {
  const row = await pool.query(`SELECT * FROM messages WHERE id = ${id}`);
  return row;
}

module.exports = {
  insertPost,
  getAllPosts,
  getPost,
};
