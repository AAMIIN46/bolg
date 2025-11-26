const express = require("express");
const app = express();

//middleware
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, aliiiii!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
