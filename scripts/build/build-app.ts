import { spawn } from "../../utils/spawn";
import { getCIName } from "../../utils/ci";

(async () => {
  if (getCIName() !== "Vercel") {
    [
      "SENTRY_DSN",
      "GATSBY_ALGOLIA_APP_ID",
      "GATSBY_ALGOLIA_SEARCH_KEY",
      "ALGOLIA_ADMIN_KEY",
    ].forEach(e => delete process.env[e]);
  }

  await spawn("gatsby build --prefix-paths");
})();
