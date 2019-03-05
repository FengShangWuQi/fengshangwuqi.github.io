import React, { useRef } from "react";

import { useRect } from "src-core/react";
import { useDesignSystem } from "src-core/ds";
import { size, position } from "src-core/style";

import { Cover } from "src-components/canvas";

export const Header = () => {
  return (
    <Wrapper>
      {({ width, height }) => <Cover width={width} height={height} />}
    </Wrapper>
  );
};

const Wrapper = ({
  children,
}: {
  children: ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }) => React.ReactNode;
}) => {
  const ds = useDesignSystem();

  const ref = useRef(null);
  const rect = useRect(ref);

  return (
    <div
      ref={ref}
      css={{
        ...position("relative"),
        ...size("100%", 400),
        background: "#171a19",
        color: ds.color.text,
        cursor: "grab",
        "&:active": {
          cursor: "grabbing",
        },
      }}>
      {children({ width: rect.width, height: rect.height })}
    </div>
  );
};
