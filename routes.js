const ticketController = require('./controllers/ticket');

function Routes(app) {
  app.get('/tickets', function(req, res){
    ticketController.getAllTickets(req, res);
  });
  app.get('/ticket/:id', function(req, res){
    res.send('Hello World !!!')
  });
  app.delete('/ticket/:id', function(req, res){
    ticketController.deleteTicket(req, res);
  });
  app.post('/ticket', function(req, res){
    ticketController.createTicket(req, res);
  });
}

module.exports = {
  startRoutes: function(app){
    return Routes(app)
  }
};