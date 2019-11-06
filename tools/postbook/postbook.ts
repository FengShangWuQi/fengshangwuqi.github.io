import * as path from "path";
import * as fse from "fs-extra";
import * as os from "os";
import * as pinyin_ from "pinyin";
import * as rewritePattern_ from "regexpu-core";
import chalk from "chalk";

const pinyin = pinyin_;
const rewritePattern = rewritePattern_;

const configPath = path.join(os.homedir(), ".postbook", "config.json");

const successLog = (message: string) => {
  console.log(`${chalk.green(" success ".toUpperCase())} ${message}`);
};

const errorLog = (text: string | Error) => {
  console.log(`${chalk.red("error")} ${text}`);
};

const formatDate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const getPingYinTitle = (title: string) => {
  const cnPattern = rewritePattern("\\p{Unified_Ideograph}", "u", {
    unicodePropertyEscape: true,
    useUnicodeFlag: true,
  });
  const pattern = `[^${cnPattern.slice(1, -1)}^a-z^A-Z^0-9/s]`;
  const re = new RegExp(pattern, "gu");

  const pingyinTitle = pinyin(title.replace(re, ""), {
    style: pinyin.STYLE_NORMAL,
  }).reduce((prev, curr) => prev.concat(`-${curr[0]}`), "");

  return pingyinTitle;
};

const getConfig = () => {
  if (fse.pathExistsSync(configPath)) {
    const config = fse.readJsonSync(configPath);

    return config;
  }

  errorLog("config file not found, pb init first.");
};

export const init = () => {
  if (fse.pathExistsSync(configPath)) {
    errorLog("config file existed, not pb init again");
  } else {
    fse.outputJsonSync(
      configPath,
      {
        postPath: "",
      },
      { spaces: 2 },
    );

    successLog(`init complete, create ${configPath}`);
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

export const createPost = ({ title }: { title: string }) => {
  const { postPath } = getConfig();

  const date = formatDate(new Date());
  const pingyinTitle = getPingYinTitle(title);
  const folderName = `${date}${pingyinTitle}`;

  const meta = {
    title,
    original: true,
    tags: ["Front-End"],
    date,
    cover: "header.png",
  };

  const content = Object.keys(meta).reduce(
    (prev, curr) =>
      curr === "tags"
        ? prev.concat(
            `${curr}:\n${meta.tags.map(tag => `${" ".repeat(2)}- ${tag}\n`)}`,
          )
        : prev.concat(`${curr}: ${meta[curr as keyof typeof meta]}\n`),
    "",
  );

  const filePath = `${postPath}/${folderName}/index.md`;

  fse.outputFileSync(filePath, `---\n${content}---`);

  successLog(`create ${filePath}`);
};
