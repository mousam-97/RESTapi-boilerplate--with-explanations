// using the express package
const express = require('express');

// mongoose is a package that helps connecting to Mongo DB easy
const mongoose = require('mongoose');

// using it so that we can keep the environment variable in a separate file
require('dotenv').config();

// for connecting to this api from cross domain
const cors = require('cors');

// creating an instance of express
const app = express();

// connecting to mongoDb database with database name apiData
// for connecting to local mongodb server
// mongoose.connect('mongodb://localhost:27017/apiData')

// for connecting to Mongo Atlas cloud server
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connection to Database is successful');
});

// in earlier versions "body-parser" was required
// but now we can use the express parser
// useing it to parse only json data
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is the home page for testing');
});

// anytime someone hits the url with /api then it will be rerouted to routes/api
app.use('/api', require('./routes/api'));

// The port at which the backend api server will run
// If it cannot find out the port from .env than port 500 will be used
const port = process.env.PORT || 5000;

// linking the port to this app
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
