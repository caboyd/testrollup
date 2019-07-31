(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('gl-matrix'), require('three')) :
    typeof define === 'function' && define.amd ? define(['exports', 'gl-matrix', 'three'], factory) :
    (global = global || self, factory(global.TEST = {}, global.glMatrix, global.THREE));
}(this, function (exports, glMatrix, THREE) { 'use strict';

    /**
     * Created by Chris on Jul, 2019
     */
    var Cow = /** @class */ (function () {
        function Cow() {
        }
        return Cow;
    }());

    function test() {
        var scene = new THREE.Scene();
        var a = glMatrix.vec3.create();
        console.log(scene);
        console.log(a);
        var b;
        b.name = "abc";
        b.age = 4;
        console.log(b);
    }

    exports.Cow = Cow;
    exports.test = test;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
