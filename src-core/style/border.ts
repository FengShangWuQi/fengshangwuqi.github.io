import { CSSObject } from "@emotion/core";

import { titleCase } from "utils/string";
import { isString } from "utils/object";

import { sides } from ".";

export const border = (
  side: string | number,
  ...values: Array<string | number>
): CSSObject => {
  if (isString(side) && sides.includes(side as string)) {
    const key = titleCase(side as string);
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
