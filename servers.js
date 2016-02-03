var http = require('http');
var PORT = 8081;

var server = http.createServer(function(req, res){
    res.end("Server is running!!!!!!");
});

server.listen(PORT, function(){
    console.log("server is listening at http://localhost:%s", PORT);
})