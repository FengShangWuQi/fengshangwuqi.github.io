import * as fse from "fs-extra";
import * as chalk from "chalk";

import {
  getConfig,
  pbPath,
  configPath,
  templateDir,
  getTemplateContent,
} from "./storage";
import { successLog, errorLog, formatDate, getPingYinTitle } from "./utils";

export const init = () => {
  if (fse.pathExistsSync(pbPath)) {
    errorLog("config file existed, do not pb init again");
  } else {
    fse.outputJsonSync(
      configPath,
      {
        postPath: "",
      },
      { spaces: 2 },
    );
    fse.ensureDirSync(templateDir);

    successLog(`create ${configPath}`);
    successLog(`create ${templateDir}`);
  }
};

export const listPosts = () => {
  const { postPath } = getConfig();

  if (!fse.pathExistsSync(postPath)) {
    return;
  }

  const postlist = fse.readdirSync(postPath);

  console.log();
  postlist
    .reverse()
    .map(post => console.log(`${" ".repeat(4)}${chalk.green(post)}\n`));
};

export const createPost = ({
  title,
  template,
}: {
  title: string;
  template?: string;
}) => {
  if (!title) {
    errorLog("title illegal");
    return;
  }

  const { postPath } = getConfig();

  const date = formatDate(new Date());
  const pingyinTitle = getPingYinTitle(title);
  const folderName = `${date}${pingyinTitle}`;

  const meta = {
    title,
    original: true,
    tags: ["Front-End"],
    date,
    cover: "header.jpg",
  };

  const metaContent = Object.keys(meta).reduce(
    (prev, curr) =>
      curr === "tags"
        ? prev.concat(
            `${curr}:\n${meta.tags.map(tag => `${" ".repeat(2)}- ${tag}\n`)}`,
          )
        : prev.concat(`${curr}: ${meta[curr as keyof typeof meta]}\n`),
    "",
  );

  const finalContent = template
    ? `---\n${metaContent}---\n\n${getTemplateContent(template)}`
    : `---\n${metaContent}---`;

  const filePath = `${postPath}/${folderName}/index.md`;

  fse.outputFileSync(filePath, finalContent);

  successLog(`create ${filePath}`);
};
