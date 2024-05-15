import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "./index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        // file: 'dist/esm/index.js',
        file: packageJson.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss({
        minimize: true,
        modules: true,
        extract: true,
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "./index.ts",
    output: [{ file: packageJson.types, format: "es" }],
    external: [/\.css$/], // ignore .scss file

    plugins: [dts()], // Ignore all CSS files
  },
  // {
  //   // input: "index.ts",
  //   // output: [{ file: "dist/types.d.ts", format: "es" }],
  //   // @ts-ignore
  //   // plugins: [
  //   //   ignore(["**/*.css"]), // Ignore all CSS files
  //   // ],
  // },
];
