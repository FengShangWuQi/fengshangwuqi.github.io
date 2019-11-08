import { createContext, useContext } from "react";
import { Dictionary } from "lodash";

import { segmentize, dynamicRe } from "src-core/router";

export interface IMatchContext {
  params: Dictionary<string>;
  path: string;
  uri: string;
}

export const MatchContext = createContext({} as IMatchContext);
export const MatchProvider = MatchContext.Provider;

export const useMatch = () => useContext(MatchContext);

export const matchPath = (uri: string, path: string): IMatchContext | null => {
  const uriSegments = segmentize(uri);
  const pathSegments = segmentize(path);

  const params: Dictionary<string> = {};

  const max = Math.max(uriSegments.length, pathSegments.length);
  let index = 0;

  while (index < max) {
    const uriSegment = uriSegments[index];
    const pathSegment = pathSegments[index];

    if (uriSegment === undefined) {
      return null;
    }

    const dynamicMatch = dynamicRe.exec(pathSegment);

    if (dynamicMatch && uriSegments[0] !== "") {
      const value = decodeURIComponent(uriSegment);
      params[dynamicMatch[1]] = value;
    } else if (pathSegment !== uriSegment) {
      return null;
    }

    index++;
  }

  return {
    params,
    uri,
    path,
  };
};
