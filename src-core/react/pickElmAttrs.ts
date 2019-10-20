import isPropValid from "@emotion/is-prop-valid";

import { IDictionary } from "utils/object";

export const pickElmAttrs = (props: IDictionary<any>) => {
  const p: IDictionary<any> = {};

  Object.keys(props).forEach(key => {
    if (isPropValid(key)) {
      p[key] = props[key];
    }
  });

  return p;
};
