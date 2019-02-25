export * from "./get";
export * from "./isUndefined";
export * from "./isEqual";
export * from "./has";

export interface IDictionary<T> {
  [index: string]: T;
}
