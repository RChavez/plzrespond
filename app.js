
/**
 * Module dependencies.
 */


var express = require('express'), app = express();
var http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , routes = require('./routes')
  , mongoose = require('mongoose');

server.listen(process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/chatdb', function (err) {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to mongoDB');
  }
});


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
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

app.get('/chat.html', routes.chat);
app.get('/inventory.html', routes.inventory);
app.get('/index.html', routes.index);
app.get('/login.html', routes.login);
app.get('/createlogin.html', routes.createlogin);
app.get('/soloconfirm.html', routes.soloconfirm);
app.get('/success.html', routes.success);
app.get('/logout.html', routes.logout);
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
        var data = { 'message' : message, pseudo : name };
        socket.broadcast.emit('message', data);
        console.log("user " + name + " send this : " + message);
    })
  });

});
