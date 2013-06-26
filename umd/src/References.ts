/// <reference path="Library.ts" />
/// <reference path="Package1/Module1.ts" />
/// <reference path="Package2/Module2.ts" />

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