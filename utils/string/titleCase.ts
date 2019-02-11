export const titleCase = (str: string) =>
  str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
