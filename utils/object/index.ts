export * from "./has";
export * from "./get";
export * from "./merge";

export * from "./isEqual";
export * from "./isObjEqual";
export * from "./isArrEqual";
export * from "./isEmpty";

export * from "./isUndefined";
export * from "./isObject";
export * from "./isString";
export * from "./isNull";
export * from "./isFunction";
export * from "./isMap";
export * from "./isSet";
export * from "./isArguments";
export * from "./isBoolean";
export * from "./isNumber";

export interface IDictionary<T> {
  [index: string]: T;
}

export const toString = (value: any) => Object.prototype.toString.call(value);
