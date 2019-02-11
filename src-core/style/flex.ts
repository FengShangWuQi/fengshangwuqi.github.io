import { CSSObject } from "@emotion/core";
import {
  AlignContentProperty,
  AlignItemsProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
} from "csstype";

export interface IFlexOptions {
  flexDirection?: FlexDirectionProperty;
  flexWrap?: FlexWrapProperty;
  justifyContent?: JustifyContentProperty;
  alignItems?: AlignItemsProperty;
  alignContent?: AlignContentProperty;
}

export const flex = (flexOpts: IFlexOptions = {}): CSSObject => ({
  display: "flex",
  ...flexOpts,
});
