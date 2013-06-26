define(["require", "exports", "./Package1/Module1", "./Package2/Module2"], function(require, exports, __module1__, __module2__) {
    var module1 = __module1__;
    var module2 = __module2__;

    exports.NAME = "Library";

    function read() {
        var instance1 = new module1.Class1();
        var instance2 = new module2.Class2();
        return instance1 + "\n" + instance2;
    }
    exports.read = read;
});
//@ sourceMappingURL=Library.js.map
