;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
﻿var library = require("./src/Library");
alert(library.read());
},{"./src/Library":2}],2:[function(require,module,exports){
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

},{"./Package1/Module1":3,"./Package2/Module2":4}],3:[function(require,module,exports){
var library = require("../Library");

var Class1 = (function () {
    function Class1() {
    }
    Class1.prototype.toString = function () {
        return "Hello from " + library.NAME + ".Package1.Module1.Class1";
    };
    return Class1;
})();
exports.Class1 = Class1;

//@ sourceMappingURL=Module1.js.map

},{"../Library":2}],4:[function(require,module,exports){
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

},{"../Library":2}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFdpbGxBXFxEb2N1bWVudHNcXEdpdEh1YlxcdHlwZXNjcmlwdC1tb2R1bGVzXFxjb21tb25qcy1icm93c2VyXFxtYWluLmpzIiwiQzpcXFVzZXJzXFxXaWxsQVxcRG9jdW1lbnRzXFxHaXRIdWJcXHR5cGVzY3JpcHQtbW9kdWxlc1xcY29tbW9uanMtYnJvd3Nlclxcc3JjXFxMaWJyYXJ5LmpzIiwiQzpcXFVzZXJzXFxXaWxsQVxcRG9jdW1lbnRzXFxHaXRIdWJcXHR5cGVzY3JpcHQtbW9kdWxlc1xcY29tbW9uanMtYnJvd3Nlclxcc3JjXFxQYWNrYWdlMVxcTW9kdWxlMS5qcyIsIkM6XFxVc2Vyc1xcV2lsbEFcXERvY3VtZW50c1xcR2l0SHViXFx0eXBlc2NyaXB0LW1vZHVsZXNcXGNvbW1vbmpzLWJyb3dzZXJcXHNyY1xcUGFja2FnZTJcXE1vZHVsZTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyLvu792YXIgbGlicmFyeSA9IHJlcXVpcmUoXCIuL3NyYy9MaWJyYXJ5XCIpO1xyXG5hbGVydChsaWJyYXJ5LnJlYWQoKSk7IiwidmFyIG1vZHVsZTEgPSByZXF1aXJlKFwiLi9QYWNrYWdlMS9Nb2R1bGUxXCIpO1xyXG52YXIgbW9kdWxlMiA9IHJlcXVpcmUoXCIuL1BhY2thZ2UyL01vZHVsZTJcIik7XHJcblxyXG5leHBvcnRzLk5BTUUgPSBcIkxpYnJhcnlcIjtcclxuXHJcbmZ1bmN0aW9uIHJlYWQoKSB7XHJcbiAgICB2YXIgaW5zdGFuY2UxID0gbmV3IG1vZHVsZTEuQ2xhc3MxKCk7XHJcbiAgICB2YXIgaW5zdGFuY2UyID0gbmV3IG1vZHVsZTIuQ2xhc3MyKCk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UxICsgXCJcXG5cIiArIGluc3RhbmNlMjtcclxufVxyXG5leHBvcnRzLnJlYWQgPSByZWFkO1xyXG5cclxuLy9AIHNvdXJjZU1hcHBpbmdVUkw9TGlicmFyeS5qcy5tYXBcclxuIiwidmFyIGxpYnJhcnkgPSByZXF1aXJlKFwiLi4vTGlicmFyeVwiKTtcclxuXHJcbnZhciBDbGFzczEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2xhc3MxKCkge1xyXG4gICAgfVxyXG4gICAgQ2xhc3MxLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJIZWxsbyBmcm9tIFwiICsgbGlicmFyeS5OQU1FICsgXCIuUGFja2FnZTEuTW9kdWxlMS5DbGFzczFcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2xhc3MxO1xyXG59KSgpO1xyXG5leHBvcnRzLkNsYXNzMSA9IENsYXNzMTtcclxuXHJcbi8vQCBzb3VyY2VNYXBwaW5nVVJMPU1vZHVsZTEuanMubWFwXHJcbiIsInZhciBsaWJyYXJ5ID0gcmVxdWlyZShcIi4uL0xpYnJhcnlcIik7XHJcblxyXG52YXIgQ2xhc3MyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENsYXNzMigpIHtcclxuICAgIH1cclxuICAgIENsYXNzMi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiSGVsbG8gZnJvbSBcIiArIGxpYnJhcnkuTkFNRSArIFwiLlBhY2thZ2UyLk1vZHVsZTIuQ2xhc3MyXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENsYXNzMjtcclxufSkoKTtcclxuZXhwb3J0cy5DbGFzczIgPSBDbGFzczI7XHJcblxyXG4vL0Agc291cmNlTWFwcGluZ1VSTD1Nb2R1bGUyLmpzLm1hcFxyXG4iXX0=
;