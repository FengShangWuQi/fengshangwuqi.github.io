const loadStories = () => {
  const req = require.context(
    "../../src-components",
    true,
    /\/__storybook__\/(.+)\.tsx$/,
  );
  req.keys().forEach(req);
};

export default loadStories;
