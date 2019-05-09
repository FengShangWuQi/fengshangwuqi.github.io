import chalk from "chalk";
import * as signale from "signale";

signale.config({ displayLabel: false });

export const { log, note, pending, success } = signale;
export const { underline, dim, green, magenta, blue, red, yellow } = chalk;

export const message = {
  success: (message: string) =>
    console.log(
      `${chalk.black.bgGreen(" success ".toUpperCase())} ${dim(message)}`,
    ),
  error: (message: string) =>
    console.log(
      `${chalk.black.bgRed(" error ".toUpperCase())} ${dim(message)}`,
    ),
};
