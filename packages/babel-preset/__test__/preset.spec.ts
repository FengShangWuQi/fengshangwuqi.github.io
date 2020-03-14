import { transform } from "@babel/core";

const babelOpts = {
  babelrc: false,
  presets: [require.resolve("../index.js")],
};

const log = (code: string) => {
  const result = transform(code, babelOpts);
  console.log(result?.code);
};

describe("babel preset code transform #babel", () => {
  it("@babel/preset-env", () => {
    const code = `var a = new Promise();
    var b = new Map();`;

    log(code);
  });

  it("@babel/preset-typescript", () => {
    const code = `const x: number = 0;`;

    log(code);
  });

  it("@babel/plugin-proposal-class-properties", () => {
    const code = `class Bork {
        static a = 'foo';
        static b;
    
        x = 'bar';
        y;
      }`;

    log(code);
  });

  it("@babel/plugin-proposal-optional-chaining", () => {
    const code = `foo?.bar;`;

    log(code);
  });

  it("@babel/plugin-proposal-nullish-coalescing-operator", () => {
    const code = `var foo = object.foo ?? "default";`;

    log(code);
  });
});
