import isPropValid from "@emotion/is-prop-valid";

export const pickElmAttrs = (props: Record<string, any>) => {
  const p: Record<string, any> = {};

  Object.keys(props).forEach(key => {
    if (isPropValid(key)) {
      p[key] = props[key];
    }
  });

  return p;
};
