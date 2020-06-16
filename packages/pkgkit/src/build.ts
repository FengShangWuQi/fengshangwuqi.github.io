import { join, relative } from "path";
import spawn from "cross-spawn";
import { pathExists, pathExistsSync } from "fs-extra";
import { rollup, RollupOptions, OutputOptions } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";

import { usePkg, outputs } from "./pkg";
import { successLog, warnLog } from "./utils";

const getRootPath = (path: string): string => {
  const lernaJSONFile = join(path, "./lerna.json");

  const isLernaJSONExists = pathExistsSync(lernaJSONFile);

  if (!isLernaJSONExists) {
    return getRootPath(join(path, "../"));
  }

  return path;
};

export const build = async () => {
  const cwd = process.cwd();
  const root = getRootPath(cwd);

  const outDir = "typings";

  const [pkg, setPkg] = usePkg();

  const indexFile = join(cwd, "index.ts");

  const isIndexExists = await pathExists(indexFile);

  if (!isIndexExists) {
    warnLog(`exit ${pkg.name}, ${indexFile} not exists`);
    process.exit(0);
  }

  spawn.sync("tsc", ["--emitDeclarationOnly", "--outDir", `${root}/${outDir}`]);

  setPkg({ ...outputs });

  const rollupOpts: RollupOptions[] = [
    {
      input: indexFile,
      output: [
        {
          file: join(cwd, outputs.main),
          format: "cjs",
          banner: pkg.bin ? "#!/usr/bin/env node" : "",
        },
        {
          file: join(cwd, outputs.module),
          format: "es",
          banner: pkg.bin ? "#!/usr/bin/env node" : "",
        },
      ],
      external: Object.keys(pkg.dependencies || {}),
      plugins: [
        builtins(),
        commonjs(),
        nodeResolve({
          extensions: [".ts", ".js"],
        }),
        json(),
        babel({
          babelrc: false,
          presets: ["@fengshangwuqi/babel-preset"],
          babelHelpers: "runtime",
          exclude: "node_modules/**",
          extensions: [".ts"],
        }),
      ],
    },
    {
      input: join(root, outDir, relative(root, cwd), "index.d.ts"),
      output: [
        {
          file: join(cwd, outputs.types),
          format: "es",
        },
      ],
      plugins: [dts()],
    },
  ];

  await Promise.all(
    rollupOpts.map(opt => {
      return rollup(opt).then(bundle => {
        return Promise.all(
          ([] as OutputOptions[]).concat(opt.output || []).map(bundle.write),
        );
      });
    }),
  ).catch(err => {
    console.error(err);
  });

  successLog(`build ${pkg.name}`);
};
