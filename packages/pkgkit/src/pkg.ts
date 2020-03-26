import { join } from "path";
import { readJsonSync, writeJsonSync } from "fs-extra";

interface Dictionary<T> {
  [index: string]: T;
}

export const usePkg = (): [
  Dictionary<string | string[]>,
  (value: Dictionary<string | string[]>) => void,
] => {
  const pkgPath = join(process.cwd(), "package.json");

  const pkg = readJsonSync(pkgPath, {
    throws: false,
  });

  if (!pkg) {
    process.exit(1);
  }

  const setPkg = (value: Dictionary<string | string[]>) => {
    writeJsonSync(pkgPath, { ...pkg, ...value }, { spaces: "  " });
  };

  return [pkg, setPkg];
};

export const outputs = {
  files: ["dist/"],
  types: "dist/index.d.ts",
  main: "dist/index.cjs.js",
  module: "dist/index.es.js",
};
