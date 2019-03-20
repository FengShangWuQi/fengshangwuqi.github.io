export * from "./history";

export * from "./Location";
export * from "./Router";
export * from "./Route";
export * from "./Link";

export const dynamicRe = /^:(.+)/;

export const stripSlashes = (str: string) => str.replace(/(^\/+|\/+$)/g, "");

export const segmentize = (str: string) => stripSlashes(str).split("/");

export const isDynamic = (segment: string) => dynamicRe.test(segment);

export const isSplat = (segment: string) => segment === "*";

export const isRootSegment = (segment: string) => segment === "";
