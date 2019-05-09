import { toString } from ".";

export const isArguments = (value: any) =>
  toString(value) === "[object Arguments]";
