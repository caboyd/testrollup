import { vec3 } from 'gl-matrix';
export * from 'gl-matrix';
export * from 'three';

/**
 * Created by Chris on Jul, 2019
 */
function test() {
    var scene = new THREE.Scene();
    var a = vec3.create();
    console.log(scene);
    console.log(a);
}

export { test };
