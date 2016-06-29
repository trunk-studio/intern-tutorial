var server = require("./practice8_server");
var router = require("./practice8_router");
var requestHandles = require("./practice8_requestHandlers");

var handle = {}
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;

server.start(router.route, handle);
