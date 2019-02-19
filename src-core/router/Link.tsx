import React from "react";

import { withoutBubble } from "src-core/react";
import { useLocation } from "src-core/router";

export const Link = ({ to, ...otherProps }: { to: string }) => {
  const href = to;

  const { navigateTo } = useLocation();

  return (
    <a
      href={href}
      {...otherProps}
      onClick={withoutBubble(() =>
        navigateTo(href, { name: `${Date.now()}-${href}` }),
      )}
    />
  );
};
