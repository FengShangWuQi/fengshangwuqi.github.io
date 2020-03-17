import chalk from "chalk";

const { dim } = chalk;

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

export const isUndefined = (value: any) => value === void 0;

export const formatDate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
