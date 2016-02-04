var http = require('http');
var GOODPORT = 7000;
var BADPORT = 7500;

var niceThings = ["You have a nice smile", "You are awesome"]
var badThings = ["Your code smells", "You are not awesome"]

var getRandomItem 

var getRandomItem = function(){
  return Math.floor(Math.random() * 3);
}
// starting goodServer
var goodServer = http.createServer(function(req, res){
    var num = getRandomItem();
    res.end(niceThings[num])
    res.end("Great job your server is running on " + GOODPORT);
});

goodServer.listen(GOODPORT, function(){
    console.log("server is listening at http://localhost:%s", GOODPORT);
})

// starting badServer
var badServer = http.createServer(function(req, res){
    res.end("Your server's non performant bro " + GOODPORT);
});

badServer.listen(BADPORT, function(){
    console.log("server is listening at http://localhost:%s", BADPORT);
})
