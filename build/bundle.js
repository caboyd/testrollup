(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('gl-matrix'), require('three')) :
    typeof define === 'function' && define.amd ? define(['exports', 'gl-matrix', 'three'], factory) :
    (global = global || self, factory(global.TEST = {}, global.glMatrix, global.three));
}(this, function (exports, glMatrix, three) { 'use strict';

    /**
     * Created by Chris on Jul, 2019
     */
    function test() {
        var scene = new THREE.Scene();
        var a = glMatrix.vec3.create();
        console.log(scene);
        console.log(a);
    }

    Object.keys(glMatrix).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return glMatrix[k];
            }
        });
    });
    Object.keys(three).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return three[k];
            }
        });
    });
    exports.test = test;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
