const color = {
  primary: "#ffa7c4",

  text: "#000000",
  textLight: "#85929A",

  bg: "#FFFFFF",
  bgLight: "#E7EAEB",
};

export const defaultTheme = {
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
};

export type ITheme = typeof defaultTheme;
