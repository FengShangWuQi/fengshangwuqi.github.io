import React from "react";
import { Link } from "gatsby";

import { ITheme } from "src-core/ds";
import { mq, flex } from "src-core/style";

import { Nav } from "../common";

export const ArchiveHeader = () => {
  return (
    <div
      css={{
        ...flex({
          justifyContent: "space-between",
          alignItems: "center",
        }),
      }}>
      <Link
        to="/"
        css={(ds: ITheme) =>
          mq(["lg"], {
            marginLeft: [ds.spacing[4], ds.spacing[6]],
            fontSize: [ds.size["2xl"], ds.size["3xl"]],
          })
        }>
        枫上雾棋的日志
      </Link>

      <Nav
        css={mq(["sm"], {
          visibility: ["hidden", "visible"],
        })}
      />
    </div>
  );
};
