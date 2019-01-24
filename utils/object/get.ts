import isUndefined from "./isUndefined";

export const get = (
  object: { [key: string]: any },
  path: string[],
  defaultValue?: string,
) => {
  let obj = JSON.parse(JSON.stringify(object));
  let index = 0;

  while (obj && index < path.length) {
    obj = obj[path[index++]];
  }

  return isUndefined(obj) ? defaultValue : obj;
};
