import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import styles from 'rollup-plugin-styles';
const config = {
  input: "src/Animations.jsx",
  output: {
    file: './dist/bundle.js',
    format: "cjs",
  },
  plugins: [
    styles(),
    resolve({
      extensions: [".jsx", ".js"]
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify('production')
    }),
    commonjs(),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
      exclude: 'node_modules/**',
      extensions: ['jsx']
    }),

  ],
}
export default config;