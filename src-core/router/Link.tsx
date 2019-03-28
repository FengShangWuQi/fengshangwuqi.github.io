import React from "react";

import { withoutBubble, pickElmAttrs } from "src-core/react";
import {
  globalHistory,
  useLocation,
  useMatch,
  toSearchString,
} from "src-core/router";

import { IDictionary, isString } from "utils/object";
import { startsWith } from "utils/string";

import { segmentize, SearchQuery } from "src-core/router";

export type ToObj = {
  pathname: string;
  search?: SearchQuery;
  hash?: string;
};

export interface ILinkProps {
  to: string | ToObj;
  state?: IDictionary<string>;
  children: React.ReactNode;
}

export const Link = ({ to, state, children, ...otherProps }: ILinkProps) => {
  const {
    location = globalHistory.location,
    navigateTo = globalHistory.navigateTo,
  } = useLocation();
  const { uri = "/" } = useMatch();

  const { pathname, search, hash } = parsePath(to);

  const pathTo = resolvePath(pathname as string, uri);

  const href = `${pathTo}${search}${hash}`;

  const isCurrent = location.pathname === pathTo;

  return (
    <a
      {...pickElmAttrs(otherProps)}
      aria-current={isCurrent ? "page" : undefined}
      href={href}
      onClick={withoutBubble(() => navigateTo(href, { state }))}>
      {children}
    </a>
  );
};

export const resolvePath = (to: string, uri: string) => {
  if (startsWith(to, "/")) {
    return to;
  }

  const toSegments = segmentize(to);
  const uriSegments = segmentize(uri);

  if (!startsWith(toSegments[0], ".")) {
    const pathName = uriSegments.concat(toSegments).join("/");
    return uri === "/" ? pathName : `/${pathName}`;
  }

  const allSegments = uriSegments.concat(toSegments);
  const segments: string[] = [];

  allSegments.forEach(segment => {
    if (segment === "..") segments.pop();
    else if (segment !== "" && segment !== ".") segments.push(segment);
  });

  return `/${segments.join("/")}`;
};

export const parsePath = (to: string | ToObj) => {
  let pathname = "";
  let search = "";
  let hash = "";

  if (isString(to)) {
    const searchMatch = /\?(.+)\#/.exec(to as string);
    const hashMatch = /\#(.+)/.exec(to as string);

    if (searchMatch) search = searchMatch[1];
    if (hashMatch) hash = hashMatch[1];
    pathname = (to as string).split("?")[0];
  } else {
    pathname = (to as ToObj).pathname;
    search = toSearchString((to as ToObj).search);
    hash = (to as ToObj).hash || "";
  }

  return { pathname, search, hash };
};
