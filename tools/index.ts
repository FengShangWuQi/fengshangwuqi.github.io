import { run } from "./spawn";

enum Apps {
  bg = "blog",
  sb = "storybook",
}

enum Actions {
  dev = "development",
  b = "build",
  r = "release",
}

enum Branchs {
  MASTER = "master",
  GHPAGES = "gh-pages",
}

const APP_ENVS = (app: string) => ({
  APP: app,
  APP_BRANCH: app === Apps.bg ? Branchs.MASTER : Branchs.GHPAGES,
});

(() => {
  const apps: string[] = [Apps.bg, Apps.sb];
  const actions: string[] = [Actions.dev, Actions.b, Actions.r];

  const app = Apps[process.argv[2] as keyof typeof Apps] || apps[0];
  const action = Actions[process.argv[3] as keyof typeof Actions] || actions[0];

  const envs = APP_ENVS(app);
  console.log({ ...envs, ACTION: action });

  run(action, { ...envs });
})();
