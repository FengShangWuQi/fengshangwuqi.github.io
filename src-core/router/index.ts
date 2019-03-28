export * from "./history";

export * from "./Location";
export * from "./Router";
export * from "./Route";
export * from "./Match";
export * from "./Link";
export * from "./Redirect";
export * from "./Search";

export const dynamicRe = /^:(.+)/;

export const stripSlashes = (str: string) => str.replace(/(^\/+|\/+$)/g, "");

export const segmentize = (str: string) => stripSlashes(str).split("/");
