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
    input: ["src/index.ts", "src/style.ts"],
    output: [
      {
        dir: 'dist',
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
        exclude: 'node_modules/**',
        extensions,
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-react',
        ],
      }),
      terser(),
      postcss({
        extensions: ['.css', '.scss'],
        minimize: true,
        extract: 'index.css',
        parser: 'postcss-scss',
      }),
    ],
  },
]
