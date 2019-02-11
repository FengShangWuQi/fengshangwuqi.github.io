import { CSSObject } from "@emotion/core";

import { titleCase } from "utils/string";

import { sides } from ".";

export const border = (
  side: string,
  ...values: Array<string | number>
): CSSObject => {
  if (sides.includes(side)) {
    const key = titleCase(side);
    return {
      [`border${key}Width`]: values[0],
      [`border${key}Style`]: values[1] as string,
      [`border${key}Color`]: values[2] as string,
    };
  }

  values.unshift(side);
  return {
    borderWidth: values[0],
    borderStyle: values[1] as string,
    borderColor: values[2] as string,
  };
};
