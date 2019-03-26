import { useEffect } from "react";

import {
  globalHistory,
  useLocation,
  useMatch,
  resolvePath,
} from "src-core/router";

import { IDictionary } from "utils/object";

export interface IRedirect {
  to: string;
  state?: IDictionary<string>;
}

export const Redirect = ({ to, state }: IRedirect) => {
  const { navigateTo = globalHistory.navigateTo } = useLocation();
  const { uri = "/" } = useMatch();

  useEffect(() => {
    const redirectTo = resolvePath(to, uri);

    navigateTo(redirectTo, {
      state: state || { key: `${Date.now()}-redirect` },
      replace: true,
    });
  }, []);

  return null;
};
