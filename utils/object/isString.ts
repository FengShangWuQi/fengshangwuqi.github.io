import { toString } from ".";

export const isString = (value: any) => toString(value) === "[object String]";
