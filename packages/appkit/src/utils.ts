import chalk from "chalk";
import spawn from "cross-spawn";

export const successLog = (msg: string) =>
  console.log(`${chalk.green("success")} ${msg}`);

export const warnLog = (msg: string) =>
  console.log(`${chalk.yellow("warn")} ${msg}`);

export const infoLog = (msg: string) =>
  console.log(`${chalk.magenta("info")} ${msg}`);

export const errLog = (msg: string) =>
  console.log(`${chalk.red("error")} ${msg}`);

export const run = (shell: string, envs: { [key: string]: string } = {}) => {
  const cmd = spawn(shell, {
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      ...envs,
    },
  });

  console.log(envs);

  console.log(`\n${shell}\n`);

  process.on("SIGINT", () => {
    cmd.kill("SIGINT");
  });
  process.on("SIGTERM", () => {
    cmd.kill("SIGTERM");
  });
  process.on("exit", () => {
    cmd.kill();
  });
};
