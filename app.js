
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
app.get('/addRedirect', inventory.addItem);
app.get('/removeRedirect', inventory.removeItem);
app.get('/searchRedirect', inventory.search);
app.get('/index', routes.index);
app.get('/login', routes.login);
app.get('/createlogin', routes.createlogin);
app.get('/accounttype', routes.accounttype);
app.get('/createteam', routes.createteam);
app.get('/jointeam', routes.jointeam);
app.get('/newteamconfirm', routes.newteamconfirm);
app.get('/teamcode', routes.teamcode);
app.get('/soloconfirm', routes.soloconfirm);
app.get('/jointeamconfirm', routes.jointeamconfirm);
app.get('/success', routes.success);
app.get('/logout', routes.logout);
app.get('/', routes.index);

//Socket IO

io.sockets.on('connection', function(socket) {
  Chat.find({}, function(err, docs){
    if(err) throw err;
    socket.emit('loadOldMsgs', docs);
  });

  socket.on('pseudo', function(data) {
    console.log('psuedo being set server-side ' + data);
    socket.set('pseudo', data);
  });

  socket.on('message', function (message) {
    socket.get('pseudo', function (error, name) {

        //change Ryan Chavez back to "name"
        var data = { 'message' : message, pseudo : 'Ryan Chavez' };
        var newMsg = new Chat({ pseudo: name, msg: message });
        newMsg.save(function(err){
          if(err) throw err;
          socket.broadcast.emit('message', data);
        });
        console.log("user " + name + " send this : " + message);
    })

  });

});

//MongoDB for Persistent Chat

var mongooseURI =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/chatdb';

mongoose.connect(mongooseURI, function (err) {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to mongoDB');
  }
});

//schema defined
var chatSchema = mongoose.Schema({
  pseudo: String,
  msg: String,
  timeStamp: {type: Date, default: Date.now}
});

//creates an actual instance of chatSchema called 'Message'
var Chat = mongoose.model('Message', chatSchema);