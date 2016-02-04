var http = require("http");

var PORT = 8080;

var server = http.createServer(function(req,res){
  var method = req.method.toLowerCase();
  console.log("method", method);

  var requestData = '';