import yargs from "yargs";

import { init, createPost, listPosts } from "./postbook";

export const cli = () => {
  const y = yargs
    .scriptName("pb")
    .usage("$0 <cmd> [args]")
    .demandCommand(1, "must provide a valid command")
    .version()
    .help();

  y.command("init", "pb initial");

  y.command({
    command: "add [title]",
    builder: (yargs: any) =>
      yargs.options({
        t: {
          alias: "template",
          type: "string",
          describe: "add template",
        },
        m: {
          alias: "meta",
          type: "string",
          describe: "add meta",
        },
      }),
    handler: (argv: any) => {
      createPost({
        title: argv.title,
        template: argv.template,
        meta: argv.meta,
      });
    },
  });

  const argv = y.argv;
  const cmd = argv._[0];

  switch (cmd) {
    case "init": {
      init();
      break;
    }
  }

  if (!cmd) {
    listPosts();
  }
};
