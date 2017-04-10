import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
    moduleName: 'mimeticTest',
    entry: './test/**/*.js',
    plugins: [babel({
            babelrc: false,
            presets: ["es2015-rollup"]
        }),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        multiEntry()
    ],
    format: 'umd',
    dest: './test-bundle.js'
};