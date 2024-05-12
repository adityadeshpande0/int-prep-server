const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

//database connection
connection();

//middelwares

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Running on Port:${port}`));
