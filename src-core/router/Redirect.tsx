import { useEffect } from "react";

import { IDictionary } from "utils/object";

import { useRouter } from "./Router";
import { useLocation } from "./Location";
import { resolvePath } from "./Link";

export interface IRedirect {
  to: string;
  state?: IDictionary<string>;
}

export const Redirect = ({ to, state }: IRedirect) => {
  const { pathPrefix } = useRouter();
  const { navigateTo } = useLocation();

  useEffect(() => {
    const redirectTo = resolvePath(to, pathPrefix);

    navigateTo(redirectTo, {
      state: state || { key: `${Date.now()}-redirect` },
      replace: true,
    });
  }, []);

  return null;
};
