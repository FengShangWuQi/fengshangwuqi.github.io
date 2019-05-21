import { has, toString } from ".";

export const isEqual = (a: any, b: any): boolean => {
  if (a === b) {
    return true;
  }

  return isDeepEqual(a, b);
};

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

const isArrEqual = (a: [], b: []): boolean => {
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

const isObjEqual = (a: Object, b: Object): boolean => {
  const keys = Object.keys(a);
  let len = keys.length;

  if (len !== Object.keys(b).length) {
    return false;
  }

  if (JSON.stringify(a) !== JSON.stringify(b)) {
    return false;
  }

  while (len--) {
    const key = keys[len] as keyof typeof a;

    if (!(has(b, key) && isEqual(a[key], b[key]))) {
      return false;
    }
  }

  return true;
};
