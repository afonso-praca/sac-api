var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ["PHONE", "CHAT", "EMAIL"]
  },
  state: {
    type: String,
    required: true,
    enum: ["AC", "AL", "AP", "AM", "BA", "CE",
      "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
      "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO",
      "RR", "SC", "SP", "SE", "TO"]
  },
  reason: {
    type: String,
    required: true,
    enum: ["SUGGESTION", "DOUBT", "COMPLIMENT"]
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