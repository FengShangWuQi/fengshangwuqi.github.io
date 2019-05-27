import React from "react";

import { pickElmAttrs } from "src-core/react";
import { flex } from "src-core/style";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <div
        css={{
          ...flex({}),
        }}>
        <PieChart
          css={{
            marginRight: 24,
            background:
              "conic-gradient(from -35deg, #0088FE, #00C49F, #FFBB28, #FF8042)",
          }}
        />
        <PieChart
          css={{
            background:
              "conic-gradient(from -35deg, #0088FE 0% 33%, #00C49F 33% 50%, #FFBB28 50% 75%, #FF8042 75% 100%)",
          }}
        />
      </div>

      <EditLink path="cases/css/__storybook__/Attr.tsx" />
    </div>
  );
};

const PieChart = ({ ...otherProps }) => {
  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        width: 160,
        height: 160,
        borderRadius: "50%",
      }}
    />
  );
};
