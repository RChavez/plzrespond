
/**
 * Module dependencies.
 */
var express = require('express'), app = express();
var http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , routes = require('./routes')
  , mongoose = require('mongoose');

var handlebars = require('express3-handlebars')
var inventory = require('./routes/inventory');

server.listen(process.env.PORT || 3000);

// mongoose.connect('mongodb://localhost/chatdb', function (err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('Connected to mongoDB');
//   }
// });

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.engine('handlebars', handlebars());
  app.set('view engine', 'handlebars');
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/chat', routes.chat);
app.get('/inventory', routes.inventory);
app.get('/addRedirect', inventory.addItem)
app.get('/index', routes.index);
app.get('/login', routes.login);
app.get('/createlogin', routes.createlogin);
app.get('/soloconfirm', routes.soloconfirm);
app.get('/success', routes.success);
app.get('/logout', routes.logout);
app.get('/', routes.index);

// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port 3000 in %s mode", app.settings.env);
// });

//Socket IO

io.sockets.on('connection', function(socket) {

  socket.on('pseudo', function(data) {
    console.log('psuedo being set server-side ' + data);
    socket.set('pseudo', data);
  });

  socket.on('message', function (message) {
    socket.get('pseudo', function (error, name) {
        var data = { 'message' : message, pseudo : 'Ryan Chavez' };
        socket.broadcast.emit('message', data);
        console.log("user " + name + " send this : " + message);
    })
  });

});
