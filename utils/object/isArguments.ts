import { toString } from "utils/object";

export const isArguments = (value: any) =>
  toString(value) === "[object Arguments]";
