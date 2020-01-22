import { tb } from "./taskbook";

const cli = require("yargs")
  .scriptName("tb")
  .usage("$0 <cmd> [args]")
  .help()
  .alias("h", "help")
  .epilog("copyright 2019");

cli.command({
  command: "create",
  desc: "Create Item",
  aliases: "add",
  builder: (yargs: any) =>
    yargs.options({
      b: {
        alias: "board",
        type: "string",
        default: "TODO",
        describe: "Set Board. Default TODO",
      },
      n: {
        alias: "note",
        type: "string",
        describe: `Set Note Description`,
      },
      t: {
        alias: "task",
        type: "string",
        describe: `Set Task Description`,
      },
      p: {
        alias: "priority",
        type: "number",
        describe: `Set Task Priority`,
      },
    }),
  handler: (argv: any) => {
    tb.createItem({
      board: argv.board,
      taskDesc: argv.task,
      noteDesc: argv.note,
      priority: argv.priority,
    });
  },
});

cli.command({
  command: "edit [id]",
  desc: "Edit Item",
  aliases: "u",
  builder: (yargs: any) =>
    yargs.options({
      b: {
        alias: "board",
        type: "string",
        describe: "Edit Board",
      },
      m: {
        alias: "description",
        type: "string",
        describe: `Edit Description`,
      },
      p: {
        alias: "priority",
        type: "number",
        describe: `Edit Task Priority`,
      },
      s: {
        alias: "status",
        type: "number",
        describe: `Edit Task Status`,
      },
    }),
  handler: (argv: any) => {
    tb.updateItem({
      id: argv.id,
      board: argv.board,
      description: argv.description,
      priority: argv.priority,
      status: argv.status,
    });
  },
});

cli.command({
  command: "delete [id]",
  desc: "Delete Item",
  aliases: "rm",
  handler: (argv: any) => {
    tb.deleteItem(argv.id);
  },
});

cli.command({
  command: "clean",
  desc: "Clean done Items",
  handler: () => {
    tb.cleanItems();
  },
});

const argv = cli.argv;
const cmd = argv._[0];

if (!cmd) {
  tb.displayItemsByBoard();
}
