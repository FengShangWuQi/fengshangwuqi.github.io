import React from "react";

import { flex } from "src-core/style";
import { pickElmAttrs } from "src-core/react";

export default () => {
  return (
    <div
      css={{
        ...flex({
          justifyContent: "space-between",
        }),
      }}>
      <Poetry
        css={{
          writingMode: "vertical-lr",
        }}
      />
      <Poetry
        css={{
          writingMode: "vertical-rl",
        }}
      />
    </div>

    // <EditLink path="cases/css/__storybook__/writing-mode.tsx" />
  );
};

export const Poetry = ({ ...otherProps }) => {
  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        "& p": {
          margin: 10,
        },
      }}>
      <p>《一剪梅》-- 李清照</p>
      <p>红藕香残玉簟秋</p>
      <p>轻解罗裳，独上兰舟</p>
      <p>云中谁寄锦书来</p>
      <p>雁字回时，月满西楼</p>
      <p />
      <p>花自飘零水自流</p>
      <p>一种相思，两处闲愁</p>
      <p>此情无计可消除</p>
      <p>才下眉头，却上心头</p>
    </div>
  );
};
