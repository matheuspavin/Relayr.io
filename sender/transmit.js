'use strict'
var net = require('net');

var host = '127.0.0.1';
var port = 8080;
var client = new net.Socket();

module.exports = function(eventMsg, encoding, callback) {
  let bytesDispatched;
  try{
    if (!eventMsg) throw new Error('The server did not accept empty strings');
    if (!encoding) throw new Error('The server did not accept empty encoding');
    client.connect(port, host, function() {
        client.write(JSON.stringify(eventMsg));
        bytesDispatched = client._bytesDispatched;
        client.destroy();
        return callback();
      });
    } catch (err) {
      return(err);
    }
};