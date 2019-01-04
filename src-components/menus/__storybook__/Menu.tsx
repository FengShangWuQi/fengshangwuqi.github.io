import * as React from "react";
import { storiesOf } from "@storybook/react";

import { PrimaryMenu } from "../PrimaryMenu";

const stories = storiesOf("Menu", module);

stories.add("Primary", () => <PrimaryMenu />);
