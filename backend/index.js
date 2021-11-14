const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const connectStore = require('connect-mongo');

// configures for .env files
require('dotenv').config();

// configure express server
const app = express();
const port = process.env.PORT || 5000;

// hide express middleware from browser
app.disable('x-powered-by');

app.use(cors());
// parse send/receive json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// uri from mongoDB goes here
const uri = process.env.MONGODB_URL;

// connect to database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established");
});

// start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});