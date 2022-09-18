import { spawn } from "../../utils/spawn";
import { getCIName } from "../../utils/ci";

(async () => {
  if (getCIName() !== "Vercel") {
    [
      "GATSBY_ALGOLIA_APP_ID",
      "GATSBY_ALGOLIA_SEARCH_KEY",
      "ALGOLIA_ADMIN_KEY",
      "GA_TRACKING_ID",
      "SENTRY_DSN",
      "GITHUB_TOKEN",
    ].forEach(e => delete process.env[e]);
  }

  await spawn("gatsby build --prefix-paths");
})();
