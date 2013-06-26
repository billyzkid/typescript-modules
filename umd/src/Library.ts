/// <reference path="Package1/Module1.ts" />
/// <reference path="Package2/Module2.ts" />

module Library {

    export var NAME = "Library";

    export function read(): string {
        var instance1 = new Package1.Class1();
        var instance2 = new Package2.Class2();
        return instance1 + "\n" + instance2;
    }

}

declare var module;
declare var define;

// see https://github.com/umdjs/umd
if (typeof module === "object" && module.exports) {
    // CommonJS (Node)
    module.exports = Library;
} else if (typeof define === "function" && define.amd) {
    // AMD
    define(function () { return Library; });
}