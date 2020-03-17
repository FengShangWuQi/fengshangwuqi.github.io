import spawn from "cross-spawn";

export const run = (script: string, envs: { [key: string]: string } = {}) => {
  const cmd = spawn("npm", ["run", script], {
    stdio: "inherit",
    env: {
      ...process.env,
      ...envs,
    },
  });

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
