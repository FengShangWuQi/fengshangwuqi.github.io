import { run } from "./spawn";

enum Apps {
  bg = "blog",
  sb = "sbook",
}

enum Actions {
  development = "dev",
  build = "b",
  release = "r",
}

(async () => {
  const apps: string[] = [Apps.bg, Apps.sb];
  const actions: string[] = [
    Actions.development,
    Actions.build,
    Actions.release,
  ];

  const app = Apps[process.argv[2] as keyof typeof Apps] || apps[0];
  const action = process.argv[3] || actions[0];

  switch (action) {
    case Actions.build:
      run(`build::${app}`, {
        APP: app,
      });
      break;
    case Actions.release:
      run(`r::${app}`, {
        APP: app,
      });
      break;
    case Actions.development:
      run(app, {
        APP: app,
      });
      break;
    default:
      break;
  }
})();
