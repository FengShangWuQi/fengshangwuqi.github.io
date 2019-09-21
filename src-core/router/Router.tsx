import React from "react";

import {
  useLocation,
  RouteProvider,
  Route,
  MatchProvider,
  matchPath,
  stripSlashes,
  segmentize,
} from "src-core/router";

import { IDictionary } from "utils/object";

export interface IRouterCore {
  routes?: IDictionary<
    { component?: React.ComponentType; [index: string]: any } & IRouterCore
  >;
  pathPrefix?: string;
}

export const useRouter = ({ routes = {}, pathPrefix = "/" }: IRouterCore) => {
  const flatRoutes = getFlatRoutes({ routes, pathPrefix });

  if (Object.keys(flatRoutes).length === 0) {
    return null;
  }

  return (
    <Router>
      {Object.keys(flatRoutes).map(path => {
        const { component: Component, ...rest } = flatRoutes[path];

        return (
          <Route key={path} path={path}>
            <RouteProvider value={{ ...rest }}>
              <Component />
            </RouteProvider>
          </Route>
        );
      })}
    </Router>
  );
};

export const Router = ({ children }: { children: React.ReactNode }) => {
  const {
    location: { pathname },
  } = useLocation();

  const uriArr = segmentize(pathname).reduce((prev: string[], curr: string) => {
    const path =
      prev.length === 0
        ? `/${stripSlashes(curr)}`
        : `/${stripSlashes(prev[prev.length - 1])}/${stripSlashes(curr)}`;
    return [...prev, path];
  }, []);

  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement<{ path: string }>(child)) {
          const { path } = child.props;
          const matchArr = uriArr.map(uri => matchPath(uri, path));

          return matchArr.map(match => {
            if (match) {
              return (
                <MatchProvider
                  value={{
                    ...match,
                  }}>
                  {child}
                </MatchProvider>
              );
            }
            return null;
          });
        }
        return null;
      })}
    </>
  );
};

const getFlatRoutes = ({
  routes,
  pathPrefix,
}: IRouterCore): IDictionary<{
  component: React.ComponentType;
  [index: string]: any;
}> =>
  Object.keys(routes!).reduce((prev, path) => {
    const elementPath =
      pathPrefix === "/"
        ? `/${stripSlashes(path)}`
        : `/${stripSlashes(pathPrefix!)}/${stripSlashes(path)}`;

    return {
      ...prev,
      ...(routes![path].component
        ? {
            [elementPath]: {
              ...routes![path],
            },
          }
        : {}),
      ...(routes![path].routes
        ? {
            ...getFlatRoutes({
              routes: routes![path].routes,
              pathPrefix: elementPath,
            }),
          }
        : {}),
    };
  }, {});
