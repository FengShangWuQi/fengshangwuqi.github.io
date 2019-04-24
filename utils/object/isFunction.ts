import { toString } from "utils/object";

export const isFunction = (value: any) =>
  toString(value) === "[object Function]";
