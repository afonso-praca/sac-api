var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes');

var app = express();

// PARSE APPLICATION/JSON
app.use(bodyParser.json());

// SECURITY PREVENTION
app.disable("x-powered-by");

// ENABLE CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// CONNECT WITH MONGO DB
mongoose.connect('mongodb://localhost/ticket_system');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo db connected');
  startApp(app);
  routes.startRoutes(app);
});

var startApp = function (app) {
  app.listen(8080, function () {
    console.log("Server is running on port 8080");
  });
};
