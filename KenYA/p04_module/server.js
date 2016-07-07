var http = require('http');

function start(){
    function onRequest(request, response){
        console.log("In comes a method: " + request.method + " to path:" + request.url);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("Hello Kitty.");
    }

    http.createServer(onRequest).listen(5566);
    console.log("Server running at http://localhost:5566")
}

exports.start = start;
