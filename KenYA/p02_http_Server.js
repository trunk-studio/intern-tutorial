var http = require('http');
//var url = require('url');

var server = http.createServer(function(request , response){
    if(request.url === "/"){
        response.writeHead(200,{"Content-Type":"text\plain"});
        response.end("Hello, I'm home page");
    }
    else{
        response.writeHead(404,{"Content-Type":"text\plain"});
        response.end("404 error, Page not found.");
    }
});

server.listen(8080,'localhost');
console.log('Server running at http://localhost:8080');
