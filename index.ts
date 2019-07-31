import {vec3} from 'gl-matrix';
import * as THREE from 'three';
import {Cow} from "./src/Cow";

export * from './src/Cow';
export function test(){
    let scene = new THREE.Scene();
    let a = vec3.create();

    console.log(scene);
    console.log(a);
    let b:Cow;
    b.name = "abc";
    b.age = 4;
    console.log(b);
}

