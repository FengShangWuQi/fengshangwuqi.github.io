import { isNull, isString, isMap, isSet, isArguments } from ".";
import { isArray, isArrayLike } from "../array";

export const isEmpty = (value: any) => {
  if (isNull(value)) {
    return true;
  }

  if (
    isArrayLike(value) &&
    (isArray(value) || isString(value) || isArguments(value))
  ) {
    return value.length === 0;
  }

  if (isMap(value) || isSet(value)) {
    return !value.size;
  }

  return Object.keys(value).length === 0;
};
