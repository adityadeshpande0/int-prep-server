const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
