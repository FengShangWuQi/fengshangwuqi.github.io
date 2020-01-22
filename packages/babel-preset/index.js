const r = m => require.resolve(m);

module.exports = () => ({
  presets: [r("@babel/preset-typescript")],
});
