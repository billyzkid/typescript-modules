define(["require", "exports", "../Library"], function(require, exports, __library__) {
    var library = __library__;

    var Class1 = (function () {
        function Class1() {
        }
        Class1.prototype.toString = function () {
            return "Hello from " + library.NAME + ".Package1.Module1.Class1";
        };
        return Class1;
    })();
    exports.Class1 = Class1;
});
//@ sourceMappingURL=Module1.js.map
