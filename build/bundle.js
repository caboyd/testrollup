(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('gl-matrix'), require('Three')) :
    typeof define === 'function' && define.amd ? define(['exports', 'gl-matrix', 'Three'], factory) :
    (global = global || self, factory(global.IWO = {}, global.glMatrix, global.Three));
}(this, function (exports, glMatrix, Three) { 'use strict';

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
    Object.keys(Three).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return Three[k];
            }
        });
    });
    exports.test = test;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
