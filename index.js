const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/a", (req, res) => {
  res.send("Hello world a");
});

app.listen(3000);
