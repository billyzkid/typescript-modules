var library = require("../Library");

var Class2 = (function () {
    function Class2() {
    }
    Class2.prototype.toString = function () {
        return "Hello from " + library.NAME + ".Package2.Module2.Class2";
    };
    return Class2;
})();
exports.Class2 = Class2;

//@ sourceMappingURL=Module2.js.map
