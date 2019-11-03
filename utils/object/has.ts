import { isArray } from "../array";

export const hasWithKey = (obj: object, key: string): boolean => {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
};

export const has = (obj: object, path: string | string[]): boolean => {
  if (!isArray(path)) {
    return hasWithKey(obj, path as string);
  }

  const len = path.length;

  for (let i = 0; i < len; i++) {
    const key = path[i] as keyof typeof obj;

    if (!hasWithKey(obj, key)) {
      return false;
    }
    obj = obj[key];
  }

  return !!len;
};
