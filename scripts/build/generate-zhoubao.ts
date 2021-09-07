import { join } from "path";
import { readdir, outputFile } from "fs-extra";
import { isSunday, nextSunday, format } from "date-fns";
import { last } from "lodash";
import * as matter from "gray-matter";
import { logger } from "@fengshangwuqi/logger";

const subTitle = ["前端动态", "明星项目", "本周热点"];

const getIssueNum = (latestIssue: string) =>
  Number(latestIssue.replace(/issue-(\d*).*/, (_, p) => p));

(async () => {
  const today = new Date();
  let date = nextSunday(today);

  if (isSunday(today)) {
    date = today;
  }

  const formatDay = format(date, "yyyy-MM-dd");

  const files = await readdir("zhoubao");
  const issues = files
    .filter(name => name.includes("issue"))
    .sort((a, b) => (getIssueNum(a) > getIssueNum(b) ? 1 : -1));
  const lastIssue = last(issues) as string;
  const lastIssueNum = getIssueNum(lastIssue);

  const nextIssueNum = lastIssueNum + 1;
  const issueName = `issue-${nextIssueNum}.md`;
  const content = matter.stringify(
    subTitle.map(title => `## ${title}`).join("\n".repeat(2)),
    {
      title: `周报#${nextIssueNum} @`,
      tags: ["Front-End"],
      date: formatDay,
      cover: `images/issue-01.png`,
    },
  );

  await outputFile(join("zhoubao", issueName), content);

  logger(`create zhoubao: ${issueName}`).withLevel("SUCCESS");
})();
