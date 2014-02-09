
/**
 * Module dependencies.
 */


var express = require('express'), app = express();
var http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , routes = require('./routes');

server.listen(process.env.PORT || 3000);

// var express = require('express')
//   , routes = require('./routes')
//   , http = require('http');

// // var app = express();
// // var server = http.createServer(3000);
// // var io = require('socket.io').listen(server);


// var app = express();
// var server = app.listen(process.env.PORT || 3000, function(){
//       console.log("Express server listening on port 3000 in %s mode", app.settings.env);
//     });
// var io = require('socket.io').listen(server);

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
app.get('/logout.html', routes.logout);
app.get('/', routes.index);

// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port 3000 in %s mode", app.settings.env);
// });

//Socket IO

io.sockets.on('connection', function(socket) {

  socket.on('pseudo', function(data) {
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
