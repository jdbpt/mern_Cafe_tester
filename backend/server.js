const { Logger } = require('concurrently');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const app = express();
require('dotenv').config();
require('../config/database');//connect to our database, listed after dotenv

const port = process.env.PORT || 5000;//or to catch if env file not have a port


//middleware
app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//routes



//create catch all route /* 
//must go at the bottom before the listen
//or it would trump all
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});