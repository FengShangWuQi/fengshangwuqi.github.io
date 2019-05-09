import { isUndefined } from ".";

export const get = (obj: object, path: string[], defaultValue?: any) => {
  path.forEach(key => {
    if (isUndefined(obj) || obj === null) {
      return defaultValue;
    }
    obj = obj[key as keyof typeof obj];
  });

  return isUndefined(obj) ? defaultValue : obj;
};
