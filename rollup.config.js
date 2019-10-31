import path from "path";
import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";

const pkg = require(path.join(process.cwd(), "package.json"));

module.exports = {
  input: pkg.entry,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      banner: "#!/usr/bin/env node",
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
  ],
};
