import { rgba } from "polished";

import { colorPalette } from "./colorPalette";

export enum breakpoint {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
}
export type breakpointKey = keyof typeof breakpoint;

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

const radius = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  lg: "0.5rem",
  full: "9999px",
};

const zIndex = {
  hide: -1,
  auto: "auto",
  affix: 10,
  popover: 500,
  overlay: 1000,
  modal: 1100,
  toast: 1300,
  tooltip: 1400,
};

const typography = {
  fontFamily: {
    system: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif`,
  },

  size: {
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
  },

  lineHeight: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
  },
};

export const defaultTheme = {
  color,
  colorPalette,

  ...typography,

  spacing,
  radius,
  zIndex,
};

export type ITheme = typeof defaultTheme;
