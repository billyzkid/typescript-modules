import module1 = require("./Package1/Module1");
import module2 = require("./Package2/Module2");

export var NAME = "Library";

export function read(): string {
    var instance1 = new module1.Class1();
    var instance2 = new module2.Class2();
    return instance1 + "\n" + instance2;
}
