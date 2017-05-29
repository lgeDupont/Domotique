//server.js
var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)


/* --------------------------------------------------------------------- */

// implementing the socket.io message exchange methods
io.on('connection', function (socket){

  // console log on new connection
  console.log('connection')

  // listen for a disconnection of a client 
  socket.on('disconnect', function() {
    console.log('disconnection');
  });
})

/* --------------------------------------------------------------------- */

var main = function(){
  // setting up the socket.io server ....
  http.listen(7000, function () {
    console.log('listening on *:7000')
  })
}

main()


