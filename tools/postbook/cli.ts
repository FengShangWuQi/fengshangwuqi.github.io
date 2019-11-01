import * as pb from "./postbook";

const cli = require("yargs")
  .scriptName("pb")
  .usage("$0 <cmd> [args]")
  .help()
  .alias("h", "help")
  .epilog("copyright 2019");

cli.command({
  command: "init",
  desc: "Cli Init",
  handler: () => {
    pb.init();
  },
});

cli.command({
  command: "create [title]",
  desc: "Create Post",
  aliases: "add",
  handler: (argv: any) => {
    pb.createPost({
      title: argv.title,
    });
  },
});

const argv = cli.argv;
const cmd = argv._[0];

if (!cmd) {
  pb.listPosts();
}
