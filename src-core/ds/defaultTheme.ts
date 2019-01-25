const color = {
  primary: "#d23669",

  text: "#000000",
  bg: "#FFFFFF",
};

export const defaultTheme = {
  color,

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
};

export type ITheme = typeof defaultTheme;
