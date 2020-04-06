import { join } from "path";
import { writeJsonSync } from "fs-extra";

export const usePkg = (): [
  Record<string, any>,
  (value: Record<string, any>) => void,
] => {
  const pkgPath = join(process.cwd(), "package.json");

  const pkg = require(pkgPath);

  if (!pkg) {
    process.exit(1);
  }

  const setPkg = (value: Record<string, any>) => {
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
