const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const mongoose = require("mongoose");
const authRoutes = require('./routes/approutes')

  //Databse connect atlas DB
connection()
// const corsOptions = {
//   origin: 'https://intprep.netlify.app', // Allow only this origin to access the resource
//   optionsSuccessStatus: 200, // For legacy browser support
// };
//middelwares
app.use(express.json());
app.use('/api/auth', authRoutes)
app.use(cors());
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Running on Port:${port}`));
