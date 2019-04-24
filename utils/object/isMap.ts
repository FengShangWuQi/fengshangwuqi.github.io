import { toString } from "utils/object";

export const isMap = (value: any) => toString(value) === "[object Map]";
