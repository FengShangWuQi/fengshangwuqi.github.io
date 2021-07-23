import ghpages from "gh-pages";
import { logger } from "@fengshangwuqi/logger";

(() => {
  if (!process.env.RELEASE_BRANCH) return;

  ghpages.publish(
    "public",
    {
      branch: process.env.RELEASE_BRANCH,
    },
    err => {
      if (err) {
        logger(err).withLevel("ERROR");
      } else {
        logger("release").withLevel("SUCCESS");
      }
    },
  );

  ghpages.clean();
})();
