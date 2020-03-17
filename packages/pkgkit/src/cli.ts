import * as yargs from "yargs";

import { build } from "./build";

export const cli = () => {
  const y = yargs
    .scriptName("pkgkit")
    .usage("$0 <action>")
    .demandCommand(1, "must provide a valid command")
    .version()
    .help();

  y.command("build", "pkg build");
  y.command("init", "pkg initial");

  const argv = y.argv;
  const command = argv._[0];

  switch (command) {
    case "build": {
      build();
      break;
    }
    case "init": {
      console.log("init");
      break;
    }
  }
};
