const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("hello world!!").status(200);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
