/// <reference path="References.ts" />

module Library {

    export var NAME = "Library";

    export function read(): string {
        var instance1 = new Package1.Class1();
        var instance2 = new Package2.Class2();
        return instance1 + "\n" + instance2;
    }

}
