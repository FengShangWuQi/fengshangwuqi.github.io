import { outputJson, outputFile, pathExists } from "fs-extra";

import { successLog, errLog } from "./utils";

export const init = async (pkg: string) => {
  if (!pkg) {
    errLog("pkg name is required");
    process.exit(0);
  }

  const cwd = process.cwd();

  const targetDir = `${cwd}/packages/${pkg}`;
  const pkgFile = `${targetDir}/package.json`;

  const isPkgFileExists = await pathExists(pkgFile);

  if (isPkgFileExists) {
    errLog(`${pkgFile} is exists`);
    process.exit(0);
  }

  await outputJson(
    pkgFile,
    {
      name: pkg,
      version: "1.0.0",
      publishConfig: {
        access: "public",
      },
      dependencies: {},
      devDependencies: {},
      license: "MIT",
    },
    { spaces: "  " },
  );
  successLog(`add ${pkgFile}`);

  const indexFile = `${targetDir}/index.ts`;
  await outputFile(indexFile, `export * from "./src";`);
  successLog(`add ${indexFile}`);

  const srcIndexFile = `${targetDir}/src/index.ts`;
  await outputFile(
    srcIndexFile,
    `export const fun = () => {
    console.log("${pkg}");
};`,
  );
  successLog(`add ${srcIndexFile}`);

  const docFile = `${targetDir}/README.md`;
  await outputFile(docFile, `> ## ${pkg}`);
  successLog(`add ${docFile}`);
};
