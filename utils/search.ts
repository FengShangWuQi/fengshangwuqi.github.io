import { parse, stringify } from "querystring";

export type SearchQuery =
  | Record<string, string | number | boolean | string[] | number[] | boolean[]>
  | undefined;

export const toSearchString = (query: SearchQuery) => {
  const str = stringify(query);
  return str ? `?${str}` : "";
};

export const parseSearchString = (search: string) => {
  if (search.startsWith("?")) {
    return parse(search.slice(1));
  }

  return parse(search);
};
