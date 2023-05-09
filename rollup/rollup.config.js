import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

export default {
    input: "./src/index.js",
    plugins: [
        commonjs(),
        buble({
            target: { chrome: 70, firefox: 64, safari: 12 }
        }),
        nodeResolve({
            browser: true
        })
    ],
    output: [{
        name: "mimetic",
        file: "dist/mimetic.umd.js",
        format: 'umd'
    }, {
        name: "datePicker",
        file: "dist/mimetic.js",
        format: 'es'
    }],
    watch: {
        chokidar: true,
        include: 'src/**',
        exclude: 'node_modules/**',
        clearScreen: true
    }
}