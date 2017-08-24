// server.js


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connect to mongoDB database
const mongoURL = 'mongodb://localhost/meandb';

mongoose.connect(mongoURL);

// Serve static files
app.use(express.static('public'));

// Routing
router.get('/api', (request, response) => {
 response.status(200).send({message: 'Hello World!'});
});
app.use(router);

// Configure port
const port = 8080;

// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);