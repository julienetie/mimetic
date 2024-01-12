import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import multiEntry from 'rollup-plugin-multi-entry';


export default {
    moduleName: 'mimeticTest',
    entry: ['./test/**/*.js', '!./test/_setup.js'],
    plugins: [babel({
            babelrc: false,
            presets: ["es2015-rollup"],
            include: ['node_modules/chai/index.js', ]
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            include: 'node_modules/chai/index.js'
        }),
        multiEntry()
    ],
    format: 'umd',
    dest: './test-bundle.js'
};