import { toString } from "utils/object";

export const isArray = (value: any) =>
  Array.isArray || toString(value) === "[object Array]";
