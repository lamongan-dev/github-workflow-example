const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hactoberfest Surabaya 2023" });
});

module.exports = app;
