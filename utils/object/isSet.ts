import { toString } from "utils/object";

export const isSet = (value: any) => toString(value) === "[object Set]";
