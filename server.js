const express = require('express');
const path = require('path');
//middleware
const favicon = require('serve-favicon');
const logger = require('morgan');
//Always require & configure near the top
require('dotenv').config();

// Connect to the database
require('./config/database');

const app = express();

//mounting middleware
app.use(logger('dev'));
//body parser middleware (used to process requests in any Express App/Web frameowrk)
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//middleware to check and verify a JWT & assign
//the user object from the JWT to req.user
app.use(require('./config/checkToken'));

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

//put API ROUTES HERE, before the "catch all" route
//ajax requests
app.use('/api/users', require('./routes/api/users'));

 

//the following "catch all route" (wildcard --> *) is
//neccessary to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
 console.log(`Express app running on port ${port}`)
});