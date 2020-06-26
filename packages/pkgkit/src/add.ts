import { outputJson, outputFile, pathExists } from "fs-extra";
import spawn from "cross-spawn";

import { successLog, errLog } from "./utils";

const getGitConfig = (key: string) => {
  const { stdout } = spawn.sync("git", ["config", "--get", key], {
    encoding: "utf-8",
  });

  return stdout;
};

const writePackageJSON = async (pkgName: string, pkgPath: string) => {
  const userName = getGitConfig("user.name").trim();
  const userEmail = getGitConfig("user.email").trim();

  const initPkg = {
    name: `@${userName}/${pkgName}`,
    version: "1.0.0",
    author: `${userName} <${userEmail}>`,
    publishConfig: {
      access: "public",
    },
    dependencies: {},
    devDependencies: {},
    license: "MIT",
  };

  await outputJson(pkgPath, initPkg, { spaces: "  " });
};

const writeIndexFile = async (indexPath: string) => {
  const indexContent = `export * from "./src";`;

  await outputFile(indexPath, indexContent);
};

const writeSrcIndexFile = async (srcIndexPath: string) => {
  const srcIndexContent = `export const fun = () => {};`;

  await outputFile(srcIndexPath, srcIndexContent);
};

const writeDocFile = async (pkgName: string, docPath: string) => {
  const docContent = `> ## ${pkgName}`;

  await outputFile(docPath, docContent);
};

export const add = async (pkgName: string) => {
  if (!pkgName) {
    errLog("pkg name is required");
    process.exit(0);
  }

  const cwd = process.cwd();

  const targetDir = `${cwd}/packages/${pkgName}`;
  const pkgPath = `${targetDir}/package.json`;
  const docPath = `${targetDir}/README.md`;

  const isPkgFileExists = await pathExists(pkgPath);

  if (isPkgFileExists) {
    errLog(`${pkgPath} is exists`);
    process.exit(0);
  }

  const indexPath = `${targetDir}/index.ts`;
  const srcIndexPath = `${targetDir}/src/index.ts`;

  await writePackageJSON(pkgName, pkgPath);
  await writeIndexFile(indexPath);
  await writeSrcIndexFile(srcIndexPath);
  await writeDocFile(pkgName, docPath);

  successLog(`add ${pkgName}`);
};
