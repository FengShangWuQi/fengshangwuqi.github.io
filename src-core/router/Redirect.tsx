import { useEffect } from "react";

import {
  globalHistory,
  useLocation,
  useMatch,
  resolvePath,
  parsePath,
  ToObj,
} from "src-core/router";

import { IDictionary } from "utils/object";

export interface IRedirect {
  to: string | ToObj;
  from?: string;
  state?: IDictionary<string>;
}

export const Redirect = ({ from, to, state }: IRedirect) => {
  const { location, navigateTo = globalHistory.navigateTo } = useLocation();
  const { uri = "/" } = useMatch();

  useEffect(() => {
    if (!from || (from && resolvePath(from, uri) === location.pathname)) {
      const { pathname, search, hash } = parsePath(to);

      const pathTo = resolvePath(pathname as string, uri);
      const redirectTo = `${pathTo}${search}${hash}`;

      navigateTo(redirectTo, {
        state: state || { key: `${Date.now()}-redirect` },
        replace: true,
      });
    }
  }, []);

  return null;
};
