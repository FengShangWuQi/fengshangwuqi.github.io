import { isNull, isUndefined, isFunction } from "../object";

export const isArrayLike = (value: any) => {
  if (isNull(value) || isUndefined(value) || isFunction(value)) {
    return false;
  }

  const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

  const len = value.length;

  return (
    typeof len === "number" &&
    len >= 0 &&
    len % 1 == 0 &&
    len <= MAX_ARRAY_INDEX
  );
};
