import { isObject, IDictionary } from ".";

const recursiveMerge = (target: any, source: any) => {
  if (!isObject(target)) {
    return source;
  }

  const result: IDictionary<any> = { ...target };

  Object.keys(source).forEach(key => {
    const value = source[key];
    result[key] =
      isObject(result[key]) && isObject(value)
        ? recursiveMerge(result[key], value)
        : value;
  });

  return result;
};

export const merge = (
  target: Record<string, any>,
  source: Record<string, any>,
) => {
  const result: IDictionary<any> = { ...target };

  Object.keys(source).forEach(key => {
    const value = source[key];
    result[key] = recursiveMerge(result[key], value);
  });

  return result;
};
