const express = require("express");
const app = express();
const { pool, testDB } = require("./db.js");

//middleware
app.use(express.json());
testDB();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("DB error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
