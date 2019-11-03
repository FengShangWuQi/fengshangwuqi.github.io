import { has, isEqual } from ".";

export const isObjEqual = (
  a: Record<string, any>,
  b: Record<string, any>,
): boolean => {
  const keys = Object.keys(a);
  let len = keys.length;

  if (len !== Object.keys(b).length) {
    return false;
  }

  if (JSON.stringify(a) !== JSON.stringify(b)) {
    return false;
  }

  while (len--) {
    const key = keys[len];

    if (!(has(b, key) && isEqual(a[key], b[key]))) {
      return false;
    }
  }

  return true;
};
