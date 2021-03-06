var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// Create server and listen on specified port
var server = require('http').createServer(app);
var port = 3000;
server.listen(port);
console.log("Socket.io server listening at http://127.0.0.1:" + port);

// Create WebSockets socket.io server object
var sio = require('socket.io').listen(server);

// Define socket.io behavior
sio.sockets.on('connection', function(socket){
  
  // Log the disconnect  
  socket.on('disconnect', function(){
    console.log('Web client disconnected');
  });

  // Upon receiving PONG, log it to console
  socket.on('cs-pong', function(data){
    console.log(data.text);
  });

  // Upon receiving PING, respond with a PONG
  socket.on('cs-ping', function(data){
    socket.emit('ss-pong', {text: 'PONG'});
  });

  // Randomly emit PING to client
  setInterval(function(){
    socket.emit('ss-ping', {text: 'PING'});
  }, 1000 * (5 + Math.floor(Math.random() * 5)));
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
