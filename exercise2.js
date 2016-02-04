var http = require('http');
var PORT = 8080;
var url = require('url');
var fs = require('fs');

var handleRequest = function(req,res){
    var urlParts = url.parse(req.url);

    switch (urlParts.pathname){
        case "/":
            display_root(req, res);
            break;
        case "/portfolio":
            display_portfolio(req, res);
            break;
        default:
            display_404(req, res);
            break;
    }
}

var display_root = function(req, res) {
    fs.readFile("homepage.html", "utf8", function(err, data){
            if (err) { console.log(err) }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
    })

}

var display_portfolio = function(req, res) {
    var myHTML = "<html><body>";
    myHTML += "<h1>Portfolio!</h1>";
    myHTML += "</body></html>";
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(myHTML);
}

var display_404 = function(req, res){
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.write("<h1>Not found</h1>");
    res.end("This is not the page you are looking for");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("server is listening at http://localhost:%s", PORT);
})