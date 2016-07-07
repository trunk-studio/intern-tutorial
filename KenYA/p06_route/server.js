var http = require('http');
var url  = require('url');

function start(route){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("Hello Piggy (^OO^)");
    }

    http.createServer(onRequest).listen(5566);
    console.log("Server running at http://localhost:5566");
}

exports.start = start;
