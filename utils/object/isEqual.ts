import { isArrEqual, isObjEqual, toString } from ".";

export const isDeepEqual = (a: any, b: any): boolean => {
  if (toString(a) !== toString(b)) {
    return false;
  }

  switch (toString(a)) {
    case "[object Array]":
      return isArrEqual(a, b);
    case "[object Object]":
      return isObjEqual(a, b);
    case "[object Number]":
    case "[object RegExp]":
    case "[object Date]":
      return `${a}` === `${b}`;
  }

  return false;
};

export const isEqual = (a: any, b: any): boolean => {
  if (a === b) {
    return true;
  }

  return isDeepEqual(a, b);
};
