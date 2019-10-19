import { rgba } from "polished";

import { colorPalette } from "./colorPalette";

const color = {
  primary: colorPalette.blue,
  secondary: rgba(colorPalette.blue, 0.85),

  success: colorPalette.green,
  warning: colorPalette.amber,
  error: colorPalette.red,
  info: colorPalette.blue,

  text: rgba(colorPalette.black, 0.85),
  textLight: rgba(colorPalette.black, 0.65),

  bg: colorPalette.white,
  bgLight: rgba(colorPalette.black, 0.1),
};

export const defaultTheme = {
  color,
  colorPalette,

  fontFamily: {
    system: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif`,
  },

  size: {
    xs: 12,
    s: 14,
    base: 16,
    m: 18,
    l: 24,
    xl: 36,
    xxl: 48,
  },

  radius: {
    s: 2,
    base: 4,
    m: 8,
    l: 10,
  },

  padding: {
    s: 8,
    base: 12,
    m: 16,
    l: 24,
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
