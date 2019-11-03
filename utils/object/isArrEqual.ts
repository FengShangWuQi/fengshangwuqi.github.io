import { isEqual } from ".";

export const isArrEqual = (a: [], b: []): boolean => {
  let len = a.length;

  if (len !== b.length) {
    return false;
  }

  while (len--) {
    if (!isEqual(a[len], b[len])) {
      return false;
    }
  }

  return true;
};
