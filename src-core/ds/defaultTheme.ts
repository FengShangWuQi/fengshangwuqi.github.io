import { tint } from "polished";

const color = {
  primary: "#318cff",
  secondary: "#c41d7f",

  text: "#000000",
  textLight: "#85929A",

  bg: "#FFFFFF",
  bgLight: "#E7EAEB",
};

export const defaultTheme = {
  reverse() {
    return reverse(this);
  },

  color,

  fontFamily: {
    system: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif`,
  },

  size: {
    xxs: 10,
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

  grid: {
    s: 576,
    m: 768,
    l: 992,
    lg: 1200,
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 300,
    higher: 500,
  },
};

const reverse = (ds: ITheme) => {
  return {
    ...ds,

    color: {
      ...ds.color,

      primary: tint(0.4, ds.color.primary),
      secondary: tint(0.4, ds.color.secondary),

      text: "#d0ccc5",

      bg: "#181a1b",
      bgLight: "#1d1f20",
    },
  };
};

export type ITheme = typeof defaultTheme;
