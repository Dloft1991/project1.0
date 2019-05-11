
// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


//Socket.io
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/mycourt.html');
});

io.on('connection', function(socket){
  console.log('an user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});


// http.listen(PORT, function(){
//   console.log('listening on *:' + PORT);
// });