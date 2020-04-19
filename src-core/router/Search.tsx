import { parse, stringify } from "querystring";
import { Dictionary } from "lodash";

import { useLocation } from "src-core/router";

export type SearchQuery =
  | Dictionary<string | number | boolean | string[] | number[] | boolean[]>
  | undefined;

export const parseSearchString = (search: string) => {
  if (search.startsWith("?")) {
    return parse(search.slice(1));
  }

  return parse(search);
};

export const toSearchString = (query: SearchQuery) => {
  const str = stringify(query);
  return str ? `?${str}` : "";
};

export const useSearch = () => {
  const { location, navigateTo } = useLocation();

  const { pathname, search, hash } = location;
  const query = parseSearchString(search);

  const setQuery = (newQuery: SearchQuery) => {
    navigateTo(`${pathname}${toSearchString(newQuery)}${hash}`, {
      state: { key: `${Date.now()}-search` },
    });
  };

  return { query, setQuery };
};
