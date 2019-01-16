const loadStories = () => {
  const req = require.context(
    "../../src-components",
    true,
    /\/__sbook__\/(.+)\.tsx$/,
  );
  req.keys().forEach(req);
};

export default loadStories;
