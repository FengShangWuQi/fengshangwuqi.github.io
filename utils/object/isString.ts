import { toString } from "utils/object";

export const isString = (value: any) => toString(value) === "[object String]";
