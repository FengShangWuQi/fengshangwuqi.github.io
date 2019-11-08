import { useEffect } from "react";
import { Dictionary } from "lodash";

import {
  useLocation,
  useMatch,
  resolvePath,
  parsePath,
  ToObj,
} from "src-core/router";

export interface IRedirect {
  to: string | ToObj;
  from?: string;
  state?: Dictionary<string>;
}

export const Redirect = ({ from, to, state }: IRedirect) => {
  const { location, navigateTo } = useLocation();
  const { uri = "/" } = useMatch();

  useEffect(() => {
    if (!from || (from && resolvePath(from, uri) === location.pathname)) {
      const { pathname, search, hash } = parsePath(to);

      const pathTo = resolvePath(pathname, uri);
      const redirectTo = `${pathTo}${search}${hash}`;

      navigateTo(redirectTo, {
        state: state || { key: `${Date.now()}-redirect` },
        replace: true,
      });
    }
  }, []);

  return null;
};

export const useRedirect = (
  from: string,
  to: string | ToObj,
  state?: Dictionary<string>,
) => {
  const { location, navigateTo } = useLocation();
  const { uri = "/" } = useMatch();

  useEffect(() => {
    if (!from || (from && resolvePath(from, uri) === location.pathname)) {
      const { pathname, search, hash } = parsePath(to);

      const pathTo = resolvePath(pathname, uri);
      const redirectTo = `${pathTo}${search}${hash}`;

      navigateTo(redirectTo, {
        state: state || { key: `${Date.now()}-redirect` },
        replace: true,
      });
    }
  }, [location.pathname]);
};
