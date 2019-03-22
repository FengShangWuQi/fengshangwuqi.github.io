import React from "react";

import { withoutBubble, pickElmAttrs } from "src-core/react";
import { useLocation, useRouter } from "src-core/router";

import { IDictionary } from "utils/object";

import { segmentize } from ".";

export interface ILinkProps {
  to: string;
  state?: IDictionary<string>;
  children: React.ReactNode;
}

export const Link = ({ to, state, children, ...otherProps }: ILinkProps) => {
  const { pathPrefix } = useRouter();
  const { location, navigateTo } = useLocation();

  const href = resolvePath(to, pathPrefix);

  const isCurrent = location.pathname === href;

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

export const resolvePath = (to: string, pathPrefix: string) => {
  if (isStartsWith(to, "/")) {
    return to;
  }

  const [toPathName, toQuery] = to.split("?");

  const toSegments = segmentize(toPathName);
  const prefixSegments = segmentize(pathPrefix);

  if (toSegments[0] === "") {
    return addQuery(pathPrefix, toQuery);
  }

  if (!isStartsWith(toSegments[0], ".")) {
    const pathName = prefixSegments.concat(toSegments).join("/");
    return addQuery(toPathName === "/" ? pathName : `/${pathName}`, toQuery);
  }

  const allSegments = prefixSegments.concat(toSegments);
  const segments: string[] = [];

  allSegments.forEach(segment => {
    if (segment === "..") segments.pop();
    else if (segment !== ".") segments.push(segment);
  });

  return addQuery(`/${segments.join("/")}`, toQuery);
};

const isStartsWith = (str: string, str2: string) =>
  str.substr(0, str2.length) === str2;

const addQuery = (pathName: string, query: string) =>
  query ? `${pathName}?${query}` : pathName;
