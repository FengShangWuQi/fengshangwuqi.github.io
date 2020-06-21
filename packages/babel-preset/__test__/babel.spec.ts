import { transform } from "@babel/core";

import babelPreset from "../src";

const babelOpts = {
  babelrc: false,
  presets: [babelPreset],
};

describe("transform #babel", () => {
  it("transform ts", () => {
    const code = `const a: number = 1;`;
    const result = transform(code, babelOpts);

    expect(result?.code).toMatch(`const a = 1`);
  });

  it("transform class", () => {
    const code = `class Book {};`;
    const result = transform(code, babelOpts);

    expect(result?.code).toMatch(`class Book {}`);
  });

  it("transform optional-chaining", () => {
    const code = `foo?.bar;`;
    const result = transform(code, babelOpts);

    expect(result?.code).toMatch(`=== void 0 ? void 0 :`);
  });

  it("transform nullish-coalescing-operator", () => {
    const code = `object.foo ?? "default";`;
    const result = transform(code, babelOpts);

    expect(result?.code).toMatch(`!== null &&`);
    expect(result?.code).toMatch(`!== void 0 ?`);
  });
});
