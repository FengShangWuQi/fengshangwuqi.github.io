import React, { createContext, useContext } from "react";
import invariant from "invariant";

import { IDictionary } from "utils/object";

import { useLocation } from "./Location";
import { IRoute } from "./Route";
import {
  stripSlashes,
  segmentize,
  isRootSegment,
  isDynamic,
  isSplat,
  dynamicRe,
} from ".";

export interface IRouterContext {
  pathPrefix: string;
}

// static > dynamic > root > splat
const SEGMENT_POINT = 4;
const STATIC_POINT = 3;
const DYNAMIC_POINT = 2;
const ROOT_POINT = 1;
const SPLAT_PENALTY = -5;

const RESERVED_NAME = ["uri", "path"];

export const RouterContext = createContext({} as IRouterContext);
export const RouterProvider = RouterContext.Provider;

export const useRouter = () => useContext(RouterContext);

export const Router = ({ children }: { children: React.ReactNode }) => {
  const { pathPrefix } = useRouter();
  const {
    location: { pathname },
  } = useLocation();

  const routes = React.Children.map(
    children as React.ReactElement,
    createRoutes(pathPrefix),
  );
  const match = isMatch(routes, pathname);

  if (match) {
    const { params, route } = match;
    const { element } = route;

    const newPathprefix = route.default
      ? pathPrefix
      : route.path!.replace(/\*$/, "");

    return React.cloneElement(
      element,
      {
        ...params,
      },
      element.props.children ? (
        <RouterProvider value={{ pathPrefix: newPathprefix }}>
          <Router>{element.props.children}</Router>
        </RouterProvider>
      ) : (
        undefined
      ),
    );
  }

  return null;
};

const createRoutes = (pathPrefix: string) => (element: React.ReactElement) => {
  validateRouter(element);

  if (element.props.default) {
    return { element, default: true };
  }

  const elementPath = element.props.path;
  const path =
    elementPath === "/"
      ? pathPrefix
      : `${stripSlashes(pathPrefix)}/${stripSlashes(elementPath)}`;

  return {
    path: element.props.children ? `${stripSlashes(path)}/*` : path,
    default: element.props.default,
    element,
  };
};

const isMatch = (routes: IRoute[], uri: string) => {
  let match = null;
  let default_match = null;

  const uriSegments = segmentize(uri);
  const isRootUri = isRootSegment(uriSegments[0]);
  const rankRoutes = getRankRoutes(routes);

  for (let i = 0; i < rankRoutes.length; i++) {
    let missed = false;
    const { route } = rankRoutes[i];

    if (route.default) {
      default_match = {
        route,
        params: {},
        uri,
      };
      continue;
    }

    const routeSegments = segmentize(route.path!);
    const params: IDictionary<string> = {};
    const max = Math.max(uriSegments.length, routeSegments.length);
    let index = 0;

    while (index < max) {
      const uriSegment = uriSegments[index];
      const routeSegment = routeSegments[index];

      if (isSplat(routeSegment)) {
        params["*"] = uriSegments
          .slice(index)
          .map(decodeURIComponent)
          .join("/");
        break;
      }

      if (uriSegment === undefined) {
        missed = true;
        break;
      }

      const dynamicMatch = dynamicRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        validateReservedName(dynamicMatch[1], route.path!);

        const value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        missed = true;
        break;
      }

      index++;
    }

    if (!missed) {
      match = {
        route,
        params,
        uri: `/${uriSegments.slice(0, index).join("/")}`,
      };
      break;
    }
  }

  return match || default_match;
};

const getRankRoutes = (routes: IRoute[]) =>
  routes
    .map((route, index) => {
      const score = route.default
        ? 0
        : segmentize(route.path!).reduce((score, segment) => {
            score += SEGMENT_POINT;
            if (isRootSegment(segment)) score += ROOT_POINT;
            else if (isDynamic(segment)) score += DYNAMIC_POINT;
            else if (isSplat(segment)) score += SPLAT_PENALTY;
            else score += STATIC_POINT;
            return score;
          }, 0);

      return { route, score, index };
    })
    .sort((a, b) =>
      a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index,
    );

const validateRouter = (element: React.ReactElement) => {
  invariant(
    element.props.path || element.props.default,
    `<Router>: Children of <Router> must have a \`path\` or \`default\` prop. None found on element type \`${
      element.type
    }\``,
  );
};

const validateReservedName = (dynamicSegment: string, path: string) => {
  invariant(
    RESERVED_NAME.indexOf(dynamicSegment) === -1,
    `<Router> dynamic segment "${dynamicSegment}" is a reserved name. Please use a different name in path "${path}".`,
  );
};
