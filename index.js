const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const mongoose = require("mongoose");
const authRoutes = require('./routes/approutes')

  //Databse connect atlas DB
connection()
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false,
  optionsSuccessStatus: 204
};
//middelwares
app.use(express.json());
app.use('/api/auth', authRoutes)
app.use(cors(corsOptions));
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Running on Port:${port}`));
