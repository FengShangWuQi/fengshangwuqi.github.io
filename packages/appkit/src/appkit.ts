import { join } from "path";
import dotenv from "dotenv";

import { errLog, run } from "./utils";

export const appkit = (action: string, app?: string) => {
  const pkgPath = join(process.cwd(), "package.json");

  const pkg = require(pkgPath);

  if (!pkg?.appkit?.[action]) {
    errLog(`package.json not exists, or appkit ${action} script not exists`);
    process.exit(1);
  }

  const result = dotenv.config({
    path: join(process.cwd(), app ? `.env.${app}` : ".env"),
  });

  run(pkg.appkit?.[action], {
    ...(app && { APP: app }),
    ...result.parsed,
  });
};
