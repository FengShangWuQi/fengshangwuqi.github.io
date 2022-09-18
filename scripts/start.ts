import { argv } from "process";
import { logger } from "@fengshangwuqi/logger";

import { spawn } from "../utils/spawn";

(async () => {
  const action = argv[2] || "dev";
  const app = argv[3] || "blog";

  if (argv[4]) return;
  if (!["dev", "build", "release"].includes(action)) return;
  if (!["blog", "storybook"].includes(app)) return;

  await spawn(`appkit ${action} ${app}`);
})().catch(err => {
  logger(err).withLevel("ERROR");
});
