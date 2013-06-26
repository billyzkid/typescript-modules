var module1 = require("./Package1/Module1");
var module2 = require("./Package2/Module2");

exports.NAME = "Library";

function read() {
    var instance1 = new module1.Class1();
    var instance2 = new module2.Class2();
    return instance1 + "\n" + instance2;
}
exports.read = read;

//@ sourceMappingURL=Library.js.map
