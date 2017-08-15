var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');

var app = express();

// parse application/json
app.use(bodyParser.json());

// security prevention
app.disable("x-powered-by");

// enables cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var mongoose = require('mongoose');
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
