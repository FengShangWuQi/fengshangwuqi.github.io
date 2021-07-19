import ghpages from "gh-pages";
import { logger } from "@fengshangwuqi/logger";

(() => {
  ghpages.publish(
    "public",
    {
      branch: process.env.RELEASE_BRANCH || "gh-pages",
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
