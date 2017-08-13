var ticketController = require('./controllers/ticket');

function startRoutes(app) {
  app.get('/tickets', function(req, res){
    ticketController.getAllTickets(req, res);
  });
  app.post('/ticket', function(req, res){
    ticketController.createTicket(req, res);
  });
  app.delete('/ticket/:id', function(req, res){
    ticketController.deleteTicket(req, res);
  });
}

module.exports = {
  startRoutes: function(app){
    return startRoutes(app)
  }
};