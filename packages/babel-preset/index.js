const r = m => require.resolve(m);

const pkg = require("./package.json");

const presets = () => ({
  presets: [
    [
      r("@babel/preset-env"),
      {
        targets: {
          browsers: [">0.25%", "not dead"],
        },
        useBuiltIns: "usage",
        corejs: 3,
        modules: false,
        exclude: [`transform-typeof-symbol`],
      },
    ],
  ].filter(Boolean),
  plugins: [
    [
      r("@babel/plugin-transform-runtime"),
      {
        corejs: { version: 3, proposals: true },
        version: pkg.dependencies["@babel/runtime-corejs3"],
      },
    ],
    [r("@babel/plugin-transform-typescript"), { isTSX: true }],
    [
      r("@babel/plugin-proposal-class-properties"),
      {
        loose: true,
      },
    ],
    [r("@babel/plugin-proposal-optional-chaining")],
    [r("@babel/plugin-proposal-nullish-coalescing-operator")],
  ].filter(Boolean),
});

module.exports = presets;
