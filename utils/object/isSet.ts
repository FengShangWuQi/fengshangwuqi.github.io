import { toString } from ".";

export const isSet = (value: any) => toString(value) === "[object Set]";
