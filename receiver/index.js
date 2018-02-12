'use strict'
const net = require('net');

const port = 8080;
const adress = 'localhost';

process.on('SIGTERM', function() {
  process.exit(0)
})

module.exports = net.createServer(socket => {
    socket.on('data', function(data) {
        console.log(JSON.stringify(JSON.parse(data)));
    });
    socket.on('end', () =>  { return socket.destroy()});
}).listen(port, adress);
