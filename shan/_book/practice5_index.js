var server = require("./practice5_server");
var router = require("./practice5_router");

server.start(router.route);
