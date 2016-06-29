var server = require("./practice10_server");
var router = require("./practice10_router");
var requestHandles = require("./practice10_requestHandlers");

var handle = {}
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;

server.start(router.route, handle);
