import yargs from "yargs";

import { devkit } from "./devkit";

export const cli = () => {
  const y = yargs
    .scriptName("appkit")
    .usage("$0 <action> <app>")
    .version()
    .help();

  y.command("dev", "app dev");
  y.command("build", "app build");
  y.command("release", "app release");

  const argv = yargs.argv;
  const action = argv._[0];
  const app = argv._[1];

  switch (action) {
    case "dev":
    case "build":
    case "release":
      devkit(action, app);
      break;
    default:
      break;
  }
};
