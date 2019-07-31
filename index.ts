/**
 * Created by Chris on Jul, 2019
 */

import {vec3} from 'gl-matrix';
import THREE = require('three');

export * from 'three'
export * from 'gl-matrix'


export function test(){
    let scene = new THREE.Scene();
    let a = vec3.create();

    console.log(scene);
    console.log(a);
}

export interface cow {
    name: string;
    age: number;
}
