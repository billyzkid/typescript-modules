var Library;
(function (Library) {
    /// <reference path="../Library.ts" />
    (function (Package1) {
        var Class1 = (function () {
            function Class1() {
            }
            Class1.prototype.toString = function () {
                return "Hello from " + Library.NAME + ".Package1.Module1.Class1";
            };
            return Class1;
        })();
        Package1.Class1 = Class1;
    })(Library.Package1 || (Library.Package1 = {}));
    var Package1 = Library.Package1;
})(Library || (Library = {}));
var Library;
(function (Library) {
    /// <reference path="../Library.ts" />
    (function (Package2) {
        var Class2 = (function () {
            function Class2() {
            }
            Class2.prototype.toString = function () {
                return "Hello from " + Library.NAME + ".Package2.Module2.Class2";
            };
            return Class2;
        })();
        Package2.Class2 = Class2;
    })(Library.Package2 || (Library.Package2 = {}));
    var Package2 = Library.Package2;
})(Library || (Library = {}));
/// <reference path="Package1/Module1.ts" />
/// <reference path="Package2/Module2.ts" />
var Library;
(function (Library) {
    Library.NAME = "Library";

    function read() {
        var instance1 = new Library.Package1.Class1();
        var instance2 = new Library.Package2.Class2();
        return instance1 + "\n" + instance2;
    }
    Library.read = read;
})(Library || (Library = {}));

if (typeof module === "object" && module.exports) {
    // CommonJS (Node)
    module.exports = Library;
} else if (typeof define === "function" && define.amd) {
    // AMD
    define(function () {
        return Library;
    });
}
//@ sourceMappingURL=Library.js.map
