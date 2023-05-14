import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: "./src/index.js",
    plugins: [
        commonjs(),
        nodeResolve({
            browser: true,
        })
    ],
    output: [{
        name: "mimetic",
        file: "dist/mimetic.umd.js",
        format: 'umd',
    }, {
        name: "datePicker",
        file: "dist/mimetic.js",
        format: 'es',
    }],
    watch: {
        chokidar: true,
        include: 'src/**',
        exclude: 'node_modules/**',
        clearScreen: true,
    }
}