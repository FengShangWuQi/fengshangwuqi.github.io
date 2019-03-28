import { toString } from "utils/object";

export const isString = (obj: any) => toString(obj) === "[object String]";
