import { toString } from "../object";

export const isArray = (value: any) =>
  Array.isArray(value) || toString(value) === "[object Array]";
