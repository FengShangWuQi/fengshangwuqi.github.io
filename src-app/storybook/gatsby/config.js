const { join } = require("path");

const {
  siteMetadata,
  pathPrefix,
  sources,
  mdx,
  catchLinks,
  sharps,
  helmet,
  ts,
  emotion,
  twitter,
  analytics,
  offline,
} = require(join(__dirname, "../../../packages/gatsby-config"));

const svgr = {
  resolve: "gatsby-plugin-svgr",
  options: {
    icon: true,
    replaceAttrValues: {
      "#555": "currentColor",
    },
    svgoConfig: {
      cleanupAttrs: true,
      cleanupIDs: true,
      cleanupEnableBackground: true,
      inlineStyles: true,
      collapseGroups: true,
      convertStyleToAttrs: true,
      convertColors: true,
      convertShapeToPath: true,
      removeDoctype: true,
      removeXMLProcInst: true,
      removeComments: true,
      removeMetadata: true,
      removeTitle: true,
      removeDesc: true,
      removeUselessDefs: true,
      removeEditorsNSData: true,
      removeEmptyAttrs: true,
      removeHiddenElems: true,
      removeEmptyText: true,
      removeEmptyContainers: true,
      removeViewBox: true,
      removeUnknownsAndDefaults: true,
      removeUselessStrokeAndFill: true,
      removeUnusedNS: true,
    },
  },
};

module.exports = {
  siteMetadata,
  pathPrefix,
  plugins: [
    ...sources,
    ...sharps,
    mdx,
    catchLinks,
    helmet,
    ts,
    emotion,
    twitter,
    analytics,
    svgr,
    offline,
  ],
};
