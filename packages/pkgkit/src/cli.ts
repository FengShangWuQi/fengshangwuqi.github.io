import yargs from "yargs";

import { build } from "./build";
import { init } from "./init";

export const cli = () => {
  const y = yargs
    .scriptName("pkgkit")
    .usage("$0 <action> <pkg>")
    .version()
    .help();

  y.command("build", "pkg build");
  y.command("init", "pkg initial");

  const argv = y.argv;
  const action = argv._[0];
  const pkg = argv._[1];

  switch (action) {
    case "build": {
      build();
      break;
    }
    case "init": {
      init(pkg);
      break;
    }
  }
};
