import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import alias from '@rollup/plugin-alias';
import path from 'path';

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
        entryFileNames: '[name].esm.js'
      },
      {
        dir: 'dist',
        format: "cjs",
        sourcemap: true,
        entryFileNames: '[name].cjs.js'
      }
    ],
    external: /^(react|react-dom|remixicon)(\/.*)?$/,
    plugins: [
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
        ]
      }),
      // peerDepsExternal(),
      excludeDependenciesFromBundle({
        peerDependencies: true,
        dependencies: false,
      }),
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
        plugins: [
          require('postcss-import'),
          require('@tailwindcss/postcss'),
          require('autoprefixer'),
        ],
      }),
    ],
  },
]
