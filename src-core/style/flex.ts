import { CSSObject } from "@emotion/core";
import {
  AlignContentProperty,
  AlignItemsProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
  GlobalsNumber,
  AlignSelfProperty,
} from "csstype";

export interface IFlexOptions {
  // 容器属性

  flexDirection?: FlexDirectionProperty;
  // flex-direction: row | row-reverse | column | column-reverse;

  flexWrap?: FlexWrapProperty;
  // flex-wrap: nowrap | wrap | wrap-reverse;

  justifyContent?: JustifyContentProperty;
  // justify-content: flex-start | flex-end | center | space-between | space-around;

  alignItems?: AlignItemsProperty;
  // align-items: flex-start | flex-end | center | baseline | stretch;

  alignContent?: AlignContentProperty;
  // align-content: flex-start | flex-end | center | space-between | space-around | stretch;

  // 项目属性
  order?: GlobalsNumber;
  // order: <integer>;

  flexGrow?: GlobalsNumber;
  // flex-grow: <number>;

  flexShrink?: GlobalsNumber;
  // flex-shrink: <number>;

  alignSelf?: AlignSelfProperty;
  // align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

export const flex = (flexOpts: IFlexOptions = {}): CSSObject => ({
  display: "flex",
  ...flexOpts,
});
