const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const authRoutes = require("./routes/approutes");

const app = express();

// Database connection
connection();
//https://intprep.netlify.app
// CORS Options
const corsOptions = {
  origin:'https://intprep.netlify.app',
  // origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'role'],
  credentials: true, // Allow cookies to be sent/received in CORS requests
  optionsSuccessStatus:200 , // Some legacy browsers choke on 204
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

// Middlewares
app.use(express.json());
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Running on Port: ${port}`));
