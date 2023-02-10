/* eslint-disable no-relative-import-paths/no-relative-import-paths */
const linaria = require('@linaria/rollup').default;
const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve;
const babel = require('@rollup/plugin-babel').default;
const css = require('rollup-plugin-css-only');

module.exports = {
    input: './index.jsx',
    output: {
        dir: 'output',
        format: 'esm'
    },
    external: [/node_modules/],
    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx'],
        }),
        linaria({
            sourceMap: process.env.NODE_ENV !== 'production',
        }),
        css({
            output: 'styles.css',
        }),
        babel({
            babelHelpers: 'bundled'
        }),
    ],
};