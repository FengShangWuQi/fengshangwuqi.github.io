import { Method, AxiosRequestConfig } from "axios";
import { omit, omitBy, isUndefined } from "lodash";

import { Endpoints } from "../../src-client/github";

export type Route = keyof Endpoints;

interface IEndpoint {
  <R extends Route, P extends Endpoints[R] & AxiosRequestConfig>(
    route: R,
    parameters?: P,
  ): AxiosRequestConfig;
}

const urlVariableRegex = /\{[^}]+\}/g;

const removeNonChars = (variableName: string) => {
  return variableName.replace(/^\W+|\W+$/g, "");
};

const extractUrlVariableNames = (url: string) => {
  const matches = url.match(urlVariableRegex);

  if (!matches) {
    return [];
  }

  return matches.map(removeNonChars);
};

export const endpoint: IEndpoint = (route, parameters) => {
  const [method, url] = route.split(" ") as [Method, string];
  const opts = omitBy(Object.assign({ method, url }, parameters), isUndefined);

  const urlVariableNames = extractUrlVariableNames(url);

  if (urlVariableNames.length === 0) {
    return opts;
  }

  opts.url = url.replace(/\{([^{}]+)\}|([^{}]+)/g, (_, p1, p2) =>
    p1 ? opts[p1] : p2,
  );

  return omit(opts, urlVariableNames);
};
