import { join } from "path";
import { pathExistsSync } from "fs-extra";
import { rollup, RollupOptions, OutputOptions } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import rollupBabel from "rollup-plugin-babel";

import { usePkg, outputs } from "./pkg";

export const build = async () => {
  const cwd = process.cwd();

  const indexFile = join(cwd, "index.ts");

  const exists = pathExistsSync(indexFile);

  if (!exists) {
    process.exit(1);
  }

  const [pkg] = usePkg();

  const inputOps: RollupOptions = {
    input: indexFile,
    external: Object.keys(pkg.dependencies),
    plugins: [
      builtins(),
      nodeResolve({
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }),
      rollupBabel({
        babelrc: false,
        presets: ["@babel/preset-typescript"],
        plugins: [
          "@babel/plugin-transform-runtime",
          "@babel/plugin-proposal-class-properties",
        ],
        runtimeHelpers: true,
        exclude: "node_modules/**",
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }),
    ],
  };

  const mainOutputOps: OutputOptions = {
    file: join(cwd, outputs.main),
    format: "cjs",
    banner: pkg.bin ? "#!/usr/bin/env node" : "",
  };

  const moduleOutputOps: OutputOptions = {
    file: join(cwd, outputs.module),
    format: "es",
    banner: pkg.bin ? "#!/usr/bin/env node" : "",
  };

  const bundle = await rollup(inputOps);

  await bundle.write(mainOutputOps);
  await bundle.write(moduleOutputOps);
};
