import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    input: './src/index.js',
    plugins: [babel({
            babelrc: false,
            presets: ["es2015-rollup"]
        }),
        nodeResolve({
            jsnext: true,
            main: true
        })
    ],
    output: {
        name: 'mimetic',
        format: 'umd',
        file: './dist/mimetic.umd.js',
        sourcemap: true
    }
};