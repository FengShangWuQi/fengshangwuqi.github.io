import path from "path";
import { readFile } from "fs-extra";
import globby from "globby";
import matter from "gray-matter";
import { last } from "lodash";
import { logger } from "@fengshangwuqi/logger";

import { github } from "../../src-core/request/github";

(async () => {
  const issuePaths = await globby(path.join(process.cwd(), "zhoubao"), {
    expandDirectories: {
      extensions: ["md"],
    },
    gitignore: true,
  });
  const issuePath = last(issuePaths) as string;
  const issueName = path.basename(issuePath, ".md");

  const issueContent = await readFile(issuePath);
  const {
    content,
    data: { title },
  } = matter(issueContent);

  try {
    const {
      data: { discussion_url },
    } = await github.request("POST /repos/{owner}/{repo}/releases", {
      owner: "fengshangwuqi",
      repo: "fengshangwuqi.github.io",
      target_commitish: "dev",
      tag_name: issueName,
      name: title,
      body: content,
      discussion_category_name: "zhoubao",
    });

    console.log({ title, discussion_url }, "\n");

    logger(`release ${issueName}`).withLevel("SUCCESS");
  } catch (err) {
    console.log(err.response.data);
    logger(err.message).withLevel("ERROR");
  }
})();
