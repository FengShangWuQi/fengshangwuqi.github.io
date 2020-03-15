import { join } from "path";
import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import { terser } from "rollup-plugin-terser";

const cwd = process.cwd();

const pkg = require(join(cwd, "package.json"));
const inputFile = join(cwd, "index.ts");

module.exports = {
  input: inputFile,
  output: [
    {
      file: join(cwd, pkg.main),
      format: "cjs",
      banner: pkg.bin ? "#!/usr/bin/env node" : "",
    },
    {
      file: join(cwd, pkg.module),
      format: "es",
      banner: pkg.bin ? "#!/usr/bin/env node" : "",
    },
  ],
  external: [...Object.keys(pkg.dependencies)],
  plugins: [
    builtins(),
    nodeResolve({
      extensions: [".ts"],
    }),
    babel({
      babelrc: false,
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      plugins: ["@babel/plugin-proposal-class-properties"],
      externalHelpers: true,
      exclude: "node_modules/**",
      extensions: [".ts"],
    }),
    terser(),
  ],
};
