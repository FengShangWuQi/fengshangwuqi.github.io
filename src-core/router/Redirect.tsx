import React from "react";
import invariant from "invariant";

import { isUndefined } from "utils/object";

import { isDynamic, segmentize } from ".";

export interface IRedirect {
  from: string;
  to: string;
}

export const Redirect = ({  }: IRedirect) => {
  return <div />;
};

export const validateRedirect = (element: React.ReactElement) => {
  invariant(
    !isUndefined(element.props.path) ||
      element.props.default ||
      element.type === Redirect,
    `<Router>: Children of <Router> must have a \`path\` or \`default\` prop, or be a \`<Redirect>\`. None found on element type \`${
      element.type
    }\``,
  );

  invariant(
    !(element.type === Redirect && (!element.props.from || !element.props.to)),
    `<Redirect from="${element.props.from} to="${
      element.props.to
    }"/> requires both "from" and "to" props when inside a <Router>.`,
  );

  invariant(
    !(
      element.type === Redirect &&
      getStaticStr(element.props.from) == getStaticStr(element.props.to)
    ),
    `<Redirect from="${element.props.from} to="${
      element.props.to
    }"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.`,
  );
};

const getStaticStr = (str: string) =>
  segmentize(str)
    .filter(isDynamic)
    .sort()
    .join("/");
