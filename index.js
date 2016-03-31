var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app); // http.createServer(app);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

// when a user connects to the server
io.on('connection', function(socket) {
    console.log('a user connected');

    // socket.on('chat message', function(msg) {
    //     console.log('message: ' + msg);
    // });

    socket.on('chat message', function(msg) {
        io.emit('chat message 2', msg);
    });

    // socket.on('disconnect', function() {
    //     console.log('A user is disconnected');
    // })
});

server.listen(3000, function() {
    console.log('listening on port 3000');
});
