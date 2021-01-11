var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// const passport = require('passport');

var category = require('./routes/category.routes');
var car = require('./routes/car.routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
});

var rootDir = path.dirname(require.main.filename);
rootDir = path.join(rootDir, '\\');

app.use('/api/category', category);
app.use('/api/car', car);

app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

const port = process.env.PORT || 8000;

// set port
app.listen(port, function () {
    console.log(`Node API Server is running on port ${port}`);
});

module.exports = app;

exports.rootDir = rootDir;