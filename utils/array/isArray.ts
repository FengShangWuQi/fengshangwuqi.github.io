import { toString } from "../object";

export const isArray = (value: any) =>
  Array.isArray || toString(value) === "[object Array]";
