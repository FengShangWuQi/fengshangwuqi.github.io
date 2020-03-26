import pinyin from "pinyin";
import rewritePattern from "regexpu-core";
import chalk from "chalk";

export const successLog = (msg: string) =>
  console.log(`${chalk.green("success")} ${msg}`);

export const errorLog = (msg: string | Error) =>
  console.log(`${chalk.red("error")} ${msg}`);

export const getPingYinTitle = (title: string) => {
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
