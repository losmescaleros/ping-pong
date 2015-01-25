var server_name = "http://127.0.0.1:3000/";
var server = io.connect(server_name);

// On click, send a PING to the server
$('#ping').click(function(){
  server.emit('cs-ping', {text: 'PING'});
});

// Upon receiving a PONG, log the response to web console
server.on('ss-pong', function(data){
  console.log(data.text);
});

// Catch a PING message from server and respond with PONG
server.on('ss-ping', function(data){
  server.emit('cs-pong', {text: 'PONG'});
});
