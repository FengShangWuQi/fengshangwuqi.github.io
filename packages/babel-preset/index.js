const r = m => require.resolve(m);

const preset = () => {
  return {
    presets: [
      [
        r("@babel/preset-typescript"),
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
    ],
    plugins: [],
  };
};

module.exports = preset;
