// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: './index.ts',
	output: [
		{
			format: "umd",
			name: 'TEST',
			file: "build/bundle.js",
		},
		{
			format: 'esm',
			file: 'build/bundle.module.js',
		}
	],
	plugins: [
		typescript(),
		resolve()
	],
	external: [
		'gl-matrix',
		'three',
	]
}
