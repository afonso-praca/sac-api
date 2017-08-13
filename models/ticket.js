var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = new Schema({
  type: String,
  state: String,
  reason: String,
  details: String,
  createdAt: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Ticket', TicketSchema);