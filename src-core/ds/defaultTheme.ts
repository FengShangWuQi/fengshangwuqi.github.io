import { rgba } from "polished";

import { colorPalette } from "./colorPalette";

const color = {
  primary: colorPalette.blue[500],
  secondary: rgba(colorPalette.blue[500], 0.85),

  success: colorPalette.green[500],
  warning: colorPalette.orange[500],
  error: colorPalette.red[500],
  info: colorPalette.blue[500],

  text: rgba(colorPalette.black, 0.85),
  textLight: rgba(colorPalette.black, 0.65),

  bg: colorPalette.white,
  bgLight: rgba(colorPalette.black, 0.1),
};

const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
};

const spacing = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
};

export const defaultTheme = {
  color,
  colorPalette,

  fontFamily: {
    system: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif`,
  },

  fontSize,

  spacing,

  radius: {
    s: 2,
    base: 4,
    m: 8,
    l: 10,
  },

  screen: {
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
    xxl: 1600,
  },

  zIndex: {
    affix: 10,
    modal: 1000,
    message: 1010,
    dropdown: 1050,
    tooltip: 1060,
  },
};

export type ITheme = typeof defaultTheme;
