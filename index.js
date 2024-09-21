const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON

// MongoDB Atlas connection string from .env file
const mongoUri = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB Atlas:", err.message);
  });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
