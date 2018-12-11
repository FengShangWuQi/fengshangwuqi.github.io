import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { withConsole } from "@storybook/addon-console";

import { loadStories } from "./loadStories";

addDecorator(
  withOptions({
    name: "枫上雾棋的 Storybook",
    addonPanelInRight: true,
  })
);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

configure(loadStories, module);
