var http = require('http');

function onRequest(request, response){
    if(request.url === '/'){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.end("Welcome to the Hell. ^_^)y");
    }
    else{
        response.writeHead(404, {"Content-Type":"text/plain"});
        response.end("Orz\n404 error!");
    }
}

var server = http.createServer(onRequest);

server.listen(5566,"localhost");
console.log("Server running at http://localhost:5566");
