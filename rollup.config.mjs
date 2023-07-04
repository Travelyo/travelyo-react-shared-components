import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';

const packageJson = require('./package.json');
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        presets: [
          ['@babel/preset-env', {
            "targets": {
              "esmodules": true,
              "ie": "11"
            },
            "useBuiltIns": "entry",
            "corejs": 3
          }],
        ],
      }),
      terser(),
      postcss({
        extensions: ['.css', '.scss'],
        minimize: true,
        extract: true,
        parser: 'postcss-scss',
      }),
    ],
  },
]
