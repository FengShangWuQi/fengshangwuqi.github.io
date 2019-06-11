import { toString } from ".";

export const isBoolean = (value: any) =>
  value === true || value === false || toString(value) === "[object Boolean]";
