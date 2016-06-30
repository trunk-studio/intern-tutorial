var server = require("./practice6_server");
var router = require("./practice6_router");

server.start(router.route);
