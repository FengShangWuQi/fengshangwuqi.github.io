import path from "path";
import typeScript from "rollup-plugin-typescript";
import babel from "rollup-plugin-babel";

const pkg = require(path.join(process.cwd(), "package.json"));

module.exports = {
  input: "cli.ts",
  output: [
    {
      file: "cjs/cli.js",
      format: "cjs",
      banner: "#!/usr/bin/env node",
      intro: `process.env["NODE_CONFIG_DIR"] = process.cwd() + "/.taskbook/"`,
    },
    {
      file: "es/cli.js",
      format: "es",
      banner: "#!/usr/bin/env node",
      intro: `process.env["NODE_CONFIG_DIR"] = process.cwd() + "/.taskbook/"`,
    },
  ],
  external: ["tslib", "path", ...Object.keys(pkg.dependencies || {})],
  plugins: [
    typeScript(),
    babel({
      exclude: "node_modules/**",
      extensions: [".ts"],
    }),
  ],
};
