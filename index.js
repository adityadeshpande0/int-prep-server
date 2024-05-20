const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

//database connection Local DB
// mongoose
//   .connect(process.env.DB)
//   .then(console.log("Mongo DB Connected !"))
//   .catch((error) => console.log(error));


  //Databse connect atlas DB

const client = new MongoClient(process.env.AtlasDB);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas", error);
    }
}

connectToMongoDB();


//middelwares

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Running on Port:${port}`));
