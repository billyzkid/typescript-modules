/// <reference path="../lib/node/node.d.ts" />

import http = require("http");
import module1 = require("./Package1/Module1");
import module2 = require("./Package2/Module2");

export var NAME = "Library";

export function read(): string {
    var instance1 = new module1.Class1();
    var instance2 = new module2.Class2();
    return instance1 + "\n" + instance2;
}

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