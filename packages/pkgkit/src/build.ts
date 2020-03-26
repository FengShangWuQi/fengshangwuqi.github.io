import { join, relative } from "path";
import spawn from "cross-spawn";
import { pathExists, pathExistsSync } from "fs-extra";
import { rollup, RollupOptions, OutputOptions } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import rollupBabel from "rollup-plugin-babel";
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
  const typeFile = join(root, outDir, relative(root, cwd), "index.d.ts");

  const isIndexExists = await pathExists(indexFile);
  const isTypeExists = await pathExists(typeFile);

  if (!isIndexExists) {
    warnLog(`exit ${pkg.name}, ${indexFile} not exists`);
    process.exit(1);
  }

  spawn.sync("tsc", ["--emitDeclarationOnly", "--outDir", `${root}/${outDir}`]);

  if (!isTypeExists) {
    warnLog(`exit ${pkg.name}, ${typeFile} not exists`);
    process.exit(1);
  }

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
      external: Object.keys(pkg.dependencies),
      plugins: [
        builtins(),
        nodeResolve({
          extensions: [".ts"],
        }),
        rollupBabel({
          babelrc: false,
          presets: ["@babel/preset-typescript"],
          plugins: ["@babel/plugin-proposal-class-properties"],
          runtimeHelpers: true,
          exclude: "node_modules/**",
          extensions: [".ts"],
        }),
      ],
    },
    {
      input: typeFile,
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
          (opt.output! as OutputOptions[]).map(outputOpts => {
            return bundle.write(outputOpts);
          }),
        );
      });
    }),
  );

  successLog(`build ${pkg.name}`);
};
