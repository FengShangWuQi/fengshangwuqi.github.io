import { join } from "path";
import { readJson } from "fs-extra";
import dotenv from "dotenv";

import { errLog, run } from "./utils";

export const devkit = async (action: string, app: string) => {
  const pkgPath = join(process.cwd(), "package.json");

  const pkg = await readJson(pkgPath);

  if (!pkg || !pkg.appkit?.[action]) {
    errLog(`package.json not exists, or appkit ${action} script not exists`);
    process.exit(1);
  }

  const result = dotenv.config({
    path: join(process.cwd(), `.env.${app}`),
  });

  run(pkg.appkit?.[action], { APP: app, ...result.parsed });
};
