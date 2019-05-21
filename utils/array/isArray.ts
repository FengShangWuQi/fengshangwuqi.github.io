import { toString } from "../object";

export const isArray =
  Array.isArray ||
  function(value: any) {
    return toString(value) === "[object Array]";
  };
