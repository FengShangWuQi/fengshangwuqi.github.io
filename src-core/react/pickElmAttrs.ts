import isPropValid from "@emotion/is-prop-valid";

import { IDictionary } from "utils/object";

export const pickElmAttrs = (props: IDictionary<any>) => {
  const p: IDictionary<any> = {};

  for (let k in props) {
    if (isPropValid(k)) {
      p[k] = props[k];
    }
  }

  return p;
};
