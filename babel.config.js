module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "@babel/plugin-transform-typescript",
      {
        isTSX: true,
      },
    ],
  ],
};
