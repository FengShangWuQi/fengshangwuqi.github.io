import React from "react";
import { clearFix } from "polished";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";
import { pickElmAttrs } from "utils";

export const HorizontalTb = () => (
  <div
    css={{
      ...flex({ justifyContent: "center" }),
    }}>
    <Poetry
      css={{
        textAlign: "center",
        writingMode: "horizontal-tb",
      }}
    />
  </div>
);

export const VerticalLr = () => <Poetry css={{ writingMode: "vertical-lr" }} />;

export const VerticalRl = () => (
  <div
    css={{
      ...clearFix(),
    }}>
    <Poetry css={{ float: "right", writingMode: "vertical-rl" }} />
  </div>
);

const Poetry = ({ ...otherProps }) => {
  const ds = useDesignSystem();

  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        "& p": {
          margin: ds.spacing[3],
        },
      }}>
      <p>《水调歌头·明月几时有》</p>
      <p>明月几时有</p>
      <p>把酒问青天</p>
      <p>不知天上宫阙</p>
      <p>今夕是何年</p>
      <p>我欲乘风归去</p>
      <p>又恐琼楼玉宇</p>
      <p>高处不胜寒</p>
      <p>起舞弄清影</p>
      <p>何似在人间</p>
      <p>转朱阁</p>
      <p>低绮户</p>
      <p>照无眠</p>
      <p>不应有恨</p>
      <p>何事长向别时圆</p>
      <p>人有悲欢离合</p>
      <p>月有阴晴圆缺</p>
      <p>此事古难全</p>
      <p>但愿人长久</p>
      <p>千里共婵娟</p>
      <p>-- 苏轼</p>
    </div>
  );
};
