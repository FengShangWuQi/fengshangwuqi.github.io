import chalk from "chalk";

export const successLog = (msg: string) =>
  console.log(`${chalk.green("success")} ${msg}`);

export const infoLog = (msg: string) =>
  console.log(`${chalk.magenta("info")} ${msg}`);

export const warnLog = (msg: string) =>
  console.log(`${chalk.yellow("warn")} ${msg}`);

export const errLog = (msg: string) =>
  console.log(`${chalk.red("error")} ${msg}`);
