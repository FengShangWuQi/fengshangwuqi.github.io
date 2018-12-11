import {
  AlignContentProperty,
  AlignItemsProperty,
  FlexDirectionProperty,
  FlexFlowProperty,
  FlexWrapProperty,
  JustifyContentProperty,
} from "csstype";

export interface IFlexOptions {
  flexDirection?: FlexDirectionProperty;
  flexWrap?: FlexWrapProperty;
  lexFlow?: FlexFlowProperty;
  justifyContent?: JustifyContentProperty;
  alignItems?: AlignItemsProperty;
  alignContent?: AlignContentProperty;
}

export const flex = (flexOpts: IFlexOptions) => ({
  display: "flex",
  ...flexOpts,
});

export const inlineFlex = (flexOpts: IFlexOptions) => ({
  display: "inline-flex",
  ...flexOpts,
});
