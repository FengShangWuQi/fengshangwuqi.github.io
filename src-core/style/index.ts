import { CSSObject } from "@emotion/core";

import { titleCase } from "utils/string";

export const sides = ["top", "right", "bottom", "left"];

export const directionalProperty = (
  property: string,
  ...values: Array<string | number>
): CSSObject => {
  if (values.length === 0) return {};

  const [
    firstValue,
    secondValue = firstValue!,
    thirdValue = firstValue!,
    fourthValue = secondValue!,
  ] = values;
  const defaultValue = [firstValue, secondValue, thirdValue, fourthValue];
  const directionalStyle: CSSObject = {};

  defaultValue.forEach((value, index) => {
    const key = property
      ? `${property}${titleCase(sides[index])}`
      : sides[index];
    directionalStyle[key] = value;
  });

  return directionalStyle;
};

export * from "./flex";
export * from "./size";
export * from "./border";
export * from "./position";
export * from "./margin";
export * from "./padding";
