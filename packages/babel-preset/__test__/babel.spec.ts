import { transform } from "@babel/core";

import babelPreset from "../";

describe("transform #babel", () => {
  it("transform", () => {
    const result = transform(`const a: number = 1;`, { presets: babelPreset });

    console.log(result);
  });
});
