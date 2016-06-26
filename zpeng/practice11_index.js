var server = require("./practice11_server");
var router = require("./practice11_router");
var requestHandles = require("./practice11_requestHandlers");

var handle = {}
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;

server.start(router.route, handle);
