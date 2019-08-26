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

export const withWrap = () => console.log();

export const isUndefined = (value: any) => {
  const undefined = void 0;
  return value === undefined;
};

export const formatDate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export const today = new Date();

export const getLastDayOfWeek = () => {
  const date = new Date();

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 7 - date.getDay(),
  );
};
