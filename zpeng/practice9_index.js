var server = require("./practice9_server");
var router = require("./practice9_router");
var requestHandles = require("./practice9_requestHandlers");

var handle = {}
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;

server.start(router.route, handle);
