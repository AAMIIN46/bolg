const { Pool, pg } = require("pg");

const env = require("dotenv");
env.config();

const Pool = new pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  databasse: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = { pool };
