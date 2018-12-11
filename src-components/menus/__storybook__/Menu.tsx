import { storiesOf } from "@storybook/react";

import { React } from "src-core/react";

import { PrimaryMenu } from "../PrimaryMenu";

const stories = storiesOf("Menu", module);

stories.add("Primary", () => <PrimaryMenu />);
