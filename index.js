const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const mongoose = require("mongoose");
const authRoutes = require('./routes/registerUserRoute')
  //Databse connect atlas DB
connection()

//middelwares

app.use(express.json());
app.use('/api/auth', authRoutes)
app.use(cors());
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Running on Port:${port}`));
