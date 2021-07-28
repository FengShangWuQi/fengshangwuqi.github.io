import { argv } from "process";

import { spawn } from "../utils/spawn";

(async () => {
  const action = argv[2] || "dev";
  const app = argv[3] || "blog";

  await spawn(`appkit ${action} ${app}`);
})();
