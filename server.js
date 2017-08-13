const express = require('express');
const routes = require('./routes');
var bodyParser = require('body-parser');

const app = express();

// parse application/json
app.use(bodyParser.json());

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
  app.listen(3000, function () {
    console.log("Server is running on port 3000");
  });
};
