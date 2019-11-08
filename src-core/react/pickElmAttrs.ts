import isPropValid from "@emotion/is-prop-valid";
import { Dictionary } from "lodash";

export const pickElmAttrs = (props: Dictionary<any>) => {
  const p: Dictionary<any> = {};

  Object.keys(props).forEach(key => {
    if (isPropValid(key)) {
      p[key] = props[key];
    }
  });

  return p;
};
