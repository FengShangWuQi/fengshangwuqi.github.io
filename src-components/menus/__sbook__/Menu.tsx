import React from "react";
import { storiesOf } from "@storybook/react";

import { BaseMenu } from "../";

const stories = storiesOf("Menu", module);

stories.add("Base", () => <BaseMenu>123</BaseMenu>);
