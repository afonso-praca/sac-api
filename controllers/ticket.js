var mongoose = require("mongoose");
require("../models/ticket");
var Ticket = mongoose.model("Ticket");

var createTicket = function (req, res) {
  var ticket = new Ticket(req.body);
  console.log(ticket);
  ticket.save(function (err) {
    if (!err) {
      console.log("created");
      return res.status(201).jsonp(ticket);
    } else {
      console.log(err);
      return res.status(500);
    }
  });
};

var getAllTickets = function (req, res) {
  Ticket.find(function (err, tickets) {
    if (err) return console.error(err);
    res.send(tickets);
  })
};

var deleteTicket = function (req, res) {
  return Ticket.findById(req.params.id, function (err, ticket) {
    if (err !== null){
      return res.status(404).send("no ticket found");
    } else {
      if (ticket !== null) {
        return ticket.remove(function (err) {
          if (!err) {
            console.log("removed");
            return res.send("removed");
          } else {
            console.log(err);
            return res.status(500);
          }
        });
      } else {
        console.log(err);
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
  createTicket: function (req, res) {
    createTicket(req, res);
  }
};