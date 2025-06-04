import pool from './pool.js';

async function getAllMessages () {
  const {rows} = await pool.query("SELECT * FROM messages");
  return rows;
}

async function createMessage (author, message, added) {
  await pool.query("INSERT INTO messages (author, message, added) VALUES ($1, $2, $3)", [author, message, added]);
}

export { getAllMessages, createMessage };