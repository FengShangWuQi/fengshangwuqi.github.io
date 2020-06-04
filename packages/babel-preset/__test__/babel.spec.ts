import { transform } from "@babel/core";

import babelPreset from "../";

const babelOpts = {
  babelrc: false,
  presets: [babelPreset],
};

describe("transform #babel", () => {
  it("transform ts", () => {
    const code = `const a: number = 1;`;
    const result = transform(code, babelOpts);

    expect(result?.code).toBe(`"use strict";\n\nconst a = 1;`);
  });

  it("transform class", () => {
    const code = `class Book {}`;
    const result = transform(code, babelOpts);

    console.log(result);

    expect(result?.code).toBe(`"use strict";\n\nclass Book {};`);
  });
});
