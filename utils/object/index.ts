export * from "./has";
export * from "./get";

export * from "./isEqual";
export * from "./isUndefined";
export * from "./isObject";
export * from "./isString";
export * from "./isNull";
export * from "./isFunction";
export * from "./isMap";

export interface IDictionary<T> {
  [index: string]: T;
}

export const toString = (value: any) => Object.prototype.toString.call(value);
