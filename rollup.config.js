import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import needsPolyFills from "rollup-plugin-node-polyfills";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "src/main.ts",
    output: {
      globals: { nanoid: "nanoid", crypto: "crypto" },
      name: "fmWebviewerFetch",
      file: pkg.browser,
      format: "umd",
    },
    plugins: [
      needsPolyFills({ crypto: true }),
      resolve({
        // pass custom options to the resolve plugin
        browser: true,
      }),
      alias({
        debug: "/node_modules/debug/src/index.js",
      }),
      commonjs(),
      typescript({ target: "esnext" }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/main.js",
    external: ["uuid", "crypto", "debug"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
  },
];
