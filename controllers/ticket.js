var mongoose = require("mongoose");
require("../models/ticket");
var Ticket = mongoose.model("Ticket");

var createTicket = function (req, res) {
  var ticket = new Ticket(req.body);
  ticket.save(function (err) {
    if (!err) {
      return res.status(201).jsonp(ticket);
    } else {
      console.log(err);
      return res.status(500).send(err);
    }
  });
};

var updateTicket = function (req, res) {
  var query = {'_id': req.body.id};
  Ticket.findOneAndUpdate(query, req.body, {upsert:false}, function(err){
    if (err) return res.send(500).send(err);
    return res.status(200).end();
  });
};

var getAllTickets = function (req, res) {
  Ticket.find(function (err, tickets) {
    if (err) return console.error(err);
    return res.send(tickets);
  });
};

var getTicket = function (req, res) {
  Ticket.find({ _id: req.params.id }, function (err, ticket){
    if (!err && ticket && ticket.length) {
      res.send(ticket[0]);
    } else {
      return res.send("no ticket found");
    }
  });
};

var deleteTicket = function (req, res) {
  return Ticket.findById(req.params.id, function (err, ticket) {
    if (err !== null){
      return res.status(404).send("no ticket found");
    } else {
      if (ticket !== null) {
        return ticket.remove(function (err) {
          if (!err) {
            return res.send("removed");
          } else {
            return res.status(500).send(err);
          }
        });
      } else {
        return res.status(404).send("no ticket found");
      }
    }
  });
};

module.exports = {
  getAllTickets: function (req, res) {
    getAllTickets(req, res);
  },
  deleteTicket: function (req, res) {
    deleteTicket(req, res);
  },
  getTicket: function (req, res) {
    getTicket(req, res);
  },
  createTicket: function (req, res) {
    createTicket(req, res);
  },
  updateTicket: function (req, res) {
    updateTicket(req, res);
  }
};