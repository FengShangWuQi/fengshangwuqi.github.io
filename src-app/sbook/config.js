import { addParameters, addDecorator, configure } from "@storybook/react";

import loadStories from "./loadStories";
import dsDecorator from "./ds";

addDecorator(dsDecorator);

addParameters({
  options: {
    name: "枫上雾棋的 sbook",
    goFullScreen: true,
    showAddonPanel: false,
  },
});

configure(loadStories, module);
