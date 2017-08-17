var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  details: {
    type: String
  },
  createdAt: {
    type: Date,
    'default': Date.now
  }
});

module.exports = mongoose.model('Ticket', TicketSchema);