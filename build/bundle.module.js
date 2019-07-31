import { vec3 } from 'gl-matrix';
import { Scene } from 'three';

/**
 * Created by Chris on Jul, 2019
 */
var Cow = /** @class */ (function () {
    function Cow() {
    }
    return Cow;
}());

function test() {
    var scene = new Scene();
    var a = vec3.create();
    console.log(scene);
    console.log(a);
    var b;
    b.name = "abc";
    b.age = 4;
    console.log(b);
}

export { Cow, test };
