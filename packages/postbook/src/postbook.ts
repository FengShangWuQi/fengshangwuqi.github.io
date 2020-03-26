import {
  outputFile,
  readdir,
  pathExists,
  outputJson,
  ensureDir,
} from "fs-extra";
import chalk from "chalk";
import { format } from "date-fns";

import {
  getConfig,
  pbPath,
  configPath,
  templateDir,
  getMetaContent,
  getTemplateContent,
} from "./storage";
import { successLog, errorLog, getPingYinTitle } from "./utils";

export const init = async () => {
  const isConfigExists = await pathExists(pbPath);

  if (isConfigExists) {
    errorLog("config file existed, do not pb init again");
  } else {
    await outputJson(
      configPath,
      {
        postPath: "",
      },
      { spaces: 2 },
    );
    await ensureDir(templateDir);

    successLog(`create ${configPath}`);
    successLog(`create ${templateDir}`);
  }
};

export const listPosts = async () => {
  const { postPath } = await getConfig();

  const isPostExists = await pathExists(postPath);

  if (!isPostExists) {
    errorLog("postPath illegal");
    process.exit(1);
  }

  const postlist = await readdir(postPath);

  console.log();
  postlist
    .reverse()
    .map(post => console.log(`${" ".repeat(4)}${chalk.green(post)}\n`));
};

export const createPost = async ({
  title,
  template,
  meta,
}: {
  title: string;
  template?: string;
  meta?: string;
}) => {
  if (!title) {
    errorLog("title illegal");
    process.exit(1);
  }

  const { postPath } = await getConfig();

  const date = format(new Date(), "yyyy-MM-dd");
  const pingyinTitle = getPingYinTitle(title);
  const folderName = `${date}${pingyinTitle}`;

  const commonMeta = `title: ${title}\ndate: ${date}`;
  let finalMeta = commonMeta;

  if (meta) {
    const metaContent = await getMetaContent(meta);
    finalMeta = `${commonMeta}\n${metaContent}`;
  }

  let finalContent = `---\n${finalMeta}\n---`;

  if (template) {
    const templateContent = await getTemplateContent(template);
    finalContent = `---\n${finalMeta}\n---\n\n${templateContent}`;
  }

  const filePath = `${postPath}/${folderName}/index.md`;

  await outputFile(filePath, finalContent);

  successLog(`create ${filePath}`);
};
