/// <reference path="../lib/node/node.d.ts" />
var http = require("http");
var module1 = require("./Package1/Module1");
var module2 = require("./Package2/Module2");

exports.NAME = "Library";

function read() {
    var instance1 = new module1.Class1();
    var instance2 = new module2.Class2();
    return instance1 + "\n" + instance2;
}
exports.read = read;

// use node
var host = "127.0.0.1";
var port = 1337;
var url = "http://" + host + ":" + port;
var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from " + url);
});

server.listen(port, host);
console.log("Server running at " + url);

//@ sourceMappingURL=Library.js.map
