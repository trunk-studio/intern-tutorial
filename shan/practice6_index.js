var server = require("./practice6_server");
var router = require("./practice6_router");
var requestHandlers = require("./practice6_requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
