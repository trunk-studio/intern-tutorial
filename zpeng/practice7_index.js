var server = require("./practice7_server");
var router = require("./practice7_router");
var requestHandles = require("./practice7_requestHandles");

var handle = {}
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;

server.start(router.route, handle);
