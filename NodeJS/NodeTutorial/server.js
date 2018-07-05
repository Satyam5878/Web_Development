

var http = require("http");

var server = http.createServer(function( request,response){
  response.writeHead(200,{"Content-Type":'text/plain'});
  response.write("Hello World");
  response.end();
});

server.listen(3000,'127.0.0.1');
console.log("Server started at port 3000....");



/*
var http = require('http');
var server = http.createServer();
server.on('request',function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World \n');
  res.end()
})

server.listen(3000);
console.log('Server running on localhost 3000');

*/


/* var fs = require("fs");
var readStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
readStream.on("data",function(chunk){
  console.log("New Data Recieved: ");
  console.log(chunk);
}); */
