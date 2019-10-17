import { isObject, IDictionary } from ".";

export const merge = (target: Object, source: Object) => {
  const result: IDictionary<any> = { ...target };

  Object.keys(source).forEach(key => {
    const value = source[key as keyof typeof source];
    result[key] = recursiveMerge(result[key], value);
  });

  return result;
};

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
