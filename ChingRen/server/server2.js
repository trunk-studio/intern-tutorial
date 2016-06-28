var http = require("http");

function onResquest(request, response){
  response.writeHead(200,{"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}
http.createServer(onRequset).listen(8888);
