import { toString } from ".";

export const isFunction = (value: any) =>
  toString(value) === "[object Function]";
