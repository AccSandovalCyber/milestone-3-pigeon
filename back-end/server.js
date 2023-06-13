// Starting the server and connecting to MongoDB 
// Listening for incoming requests & defining the endpoints for the API 

const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using the MONGODB_URI environment variable
mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Your application routes and middleware go here

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});