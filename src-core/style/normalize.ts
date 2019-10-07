import { CSSObject } from "@emotion/core";

export const normalize = (): CSSObject => ({
  /*! modern-normalize v0.5.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

  /* Document
   ========================================================================== */

  html: {
    /**
     * Use a better box model (opinionated).
     */
    boxSizing: "border-box",

    /**
     * 1. Correct the line height in all browsers.
     * 2. Prevent adjustments of font size after orientation changes in iOS.
     */
    lineHeight: 1.15 /* 1 */,
    WebkitTextSizeAdjust: "100%" /* 2 */,
  },

  [`*,
    *::before,
    *::after`]: {
    boxSizing: "inherit",
  },

  /**
   * Use a more readable tab size (opinionated).
   */
  ":root": {
    MozTabSize: 4,
    tabSize: 4,
  },

  /* Sections
     ========================================================================== */

  body: {
    /**
     * Remove the margin in all browsers.
     */
    margin: 0,

    /**
     * Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
     */
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },

  /* Grouping content
     ========================================================================== */

  /**
   * Add the correct height in Firefox.
   */
  hr: {
    height: 0,
  },

  /* Text-level semantics
     ========================================================================== */

  /**
   * Add the correct text decoration in Chrome, Edge, and Safari.
   */
  "abbr[title]": {
    textDecoration: "underline dotted",
  },

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  [`b,
    strong`]: {
    fontWeight: "bolder",
  },

  /**
   * 1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
   * 2. Correct the odd 'em' font sizing in all browsers.
   */
  [`code,
    kbd,
    samp,
    pre`]: {
    fontFamily:
      "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace" /* 1 */,
    fontSize: "1em" /* 2 */,
  },

  /**
   * Add the correct font size in all browsers.
   */
  small: {
    fontSize: "80%",
  },

  /**
   * Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
   */
  [`sub,
    sup`]: {
    fontSize: "75%",
    lineHeight: "0",
    position: "relative",
    verticalAlign: "baseline",
  },

  sub: {
    bottom: "-0.25em",
  },

  sup: {
    top: "-0.5em",
  },

  /* Forms
     ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  [`button,
    input,
    optgroup,
    select,
    textarea`]: {
    fontFamily: "inherit" /* 1 */,
    fontSize: "100%" /* 1 */,
    lineHeight: "1.15" /* 1 */,
    margin: "0" /* 2 */,
  },

  /**
   * Remove the inheritance of text transform in Edge and Firefox.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  [`button,
      select`]: {
    textTransform: "none" /* 1 */,
  },

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  [`button,
    [type="button"],
    [type="reset"],
    [type="submit"]`]: {
    WebkitAppearance: "button",
  },

  /**
   * Remove the inner border and padding in Firefox.
   */
  [`button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner`]: {
    borderStyle: "none",
    padding: "0",
  },

  /**
   * Restore the focus styles unset by the previous rule.
   */
  [`button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring`]: {
    outline: "1px dotted ButtonText",
  },

  /**
   * Correct the padding in Firefox.
   */
  fieldset: {
    padding: "0.35em 0.625em 0.75em",
  },

  /**
   * Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
   */
  legend: {
    padding: 0,
  },

  /**
   * Add the correct vertical alignment in Chrome and Firefox.
   */
  progress: {
    verticalAlign: "baseline",
  },

  /**
   * Correct the cursor style of increment and decrement buttons in Safari.
   */
  [`[type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button`]: {
    height: "auto",
  },

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  '[type="search"]': {
    WebkitAppearance: "textfield" /* 1 */,
    outlineOffset: "-2px" /* 2 */,
  },

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  '[type="search"]::-webkit-search-decoration': {
    WebkitAppearance: "none",
  },

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */
  "::-webkit-file-upload-button": {
    WebkitAppearance: "button" /* 1 */,
    font: "inherit" /* 2 */,
  },

  /* Interactive
     ========================================================================== */

  /*
   * Add the correct display in Chrome and Safari.
   */
  summary: {
    display: "list-item",
  },
});
