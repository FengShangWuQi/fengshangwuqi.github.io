import { CSSObject } from "@emotion/core";
import {
  GridTemplateColumnsProperty,
  GridTemplateRowsProperty,
  GridRowGapProperty,
  GridColumnGapProperty,
  GridGapProperty,
  GridTemplateAreasProperty,
  GridAutoFlowProperty,
  JustifyItemsProperty,
  AlignItemsProperty,
  PlaceItemsProperty,
  JustifyContentProperty,
  AlignContentProperty,
  PlaceContentProperty,
  GridAutoColumnsProperty,
  GridAutoRowsProperty,
  GridColumnStartProperty,
  GridColumnEndProperty,
  GridRowStartProperty,
  GridRowEndProperty,
  GridColumnProperty,
  GridRowProperty,
  GridAreaProperty,
  JustifySelfProperty,
  AlignSelfProperty,
  PlaceSelfProperty,
} from "csstype";

export interface IGridOptions<TLength = string | 0> {
  // 容器属性

  gridTemplateColumns?: GridTemplateColumnsProperty<TLength>;
  gridTemplateRows?: GridTemplateRowsProperty<TLength>;
  // grid-template-columns: 100px 100px 100px;
  // grid-template-columns: repeat(3, 33.33%);                  repeat
  // grid-template-columns: repeat(2, 100px 20px 80px);
  // grid-template-columns: repeat(auto-fill, 100px);
  // grid-template-columns: 150px 1fr 2fr;                      fr
  // grid-template-columns: 1fr 1fr minmax(100px, 1fr);         minmax
  // grid-template-columns: 100px auto 100px;                   auto
  // grid-template-columns: [c1] 100px [c2] auto [c3];

  gridRowGap?: GridRowGapProperty<TLength>;
  gridColumnGap?: GridColumnGapProperty<TLength>;
  gridGap?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  // grid-row-gap: 20px;
  // grid-gap: <grid-row-gap> <grid-column-gap>;

  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  // grid-template-areas: "header header header"
  //                      "main main sidebar"
  //                      "footer footer footer";

  gridAutoFlow?: GridAutoFlowProperty;
  // grid-auto-flow: row dense;

  justifyItems?: JustifyItemsProperty;
  alignItems?: AlignItemsProperty;
  placeItems?: PlaceItemsProperty;
  // justify-items: start | end | center | stretch;
  // align-items: start | end | center | stretch;
  // place-items: <align-items> <justify-items>;

  justifyContent?: JustifyContentProperty;
  alignContent?: AlignContentProperty;
  placeContent?: PlaceContentProperty;
  // justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  // align-content: start | end | center | stretch | space-around | space-between | space-evenly;

  gridAutoColumns?: GridAutoColumnsProperty<TLength>;
  gridAutoRows?: GridAutoRowsProperty<TLength>;
  // grid-auto-rows: 50px;

  // 项目属性

  gridColumn?: GridColumnProperty;
  gridColumnStart?: GridColumnStartProperty;
  gridColumnEnd?: GridColumnEndProperty;
  gridRow?: GridRowProperty;
  gridRowStart?: GridRowStartProperty;
  gridRowEnd?: GridRowEndProperty;
  // grid-column-start: 2;
  // grid-column-start: header-start;
  // grid-column: 1 / 3;
  // grid-column: 1 / span 2;

  gridArea?: GridAreaProperty;
  // grid-area: e;
  // grid-area: <row-start> / <column-start> / <row-end> / <column-end>;

  justifySelf?: JustifySelfProperty;
  alignSelf?: AlignSelfProperty;
  placeSelf?: PlaceSelfProperty;
  // justify-self: start;
  // place-self: <align-self> <justify-self>;
}

export const grid = (gridOpts: IGridOptions = {}): CSSObject => ({
  display: "grid",
  ...gridOpts,
});
