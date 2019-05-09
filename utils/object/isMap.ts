import { toString } from ".";

export const isMap = (value: any) => toString(value) === "[object Map]";
