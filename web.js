var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer;

buffer = fs.readFileSync('index.html');

var string = buffer.toString();

app.get('/', function(request, response) {
  response.send(script);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
