import { defineConfig } from "vite";

import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { resolve as pathResolve } from "path";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: pathResolve(__dirname, "./src"),
      },
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,

    lib: {
      entry: [
        pathResolve(__dirname, "src/main.ts"),
        pathResolve(__dirname, "src/adapter.ts"),
      ],
      fileName: (moduleFormat, fileName) => {
        if (moduleFormat === "es") return `${fileName}.js`;
        if (moduleFormat === "cjs") return `${fileName}.cjs`;
        return `${fileName}.js`;
      },
      name: "fmFetch",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [],
      plugins: [
        resolve({ browser: true }),
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          target: "esnext",
          sourceMap: false,
          declaration: true,
          outDir: "dist",
        }),
        commonjs(),
      ],
    },
  },
});
