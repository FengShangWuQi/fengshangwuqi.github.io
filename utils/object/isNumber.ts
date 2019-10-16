import { toString } from ".";

export const isNumber = (value: any) => toString(value) === "[object Number]";
