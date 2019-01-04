import * as React from "react";

import { Nav } from "./Nav";

export const Header = ({
  leftCenter,
  center,
  bottom,
}: {
  leftCenter?: React.ReactNode;
  center?: React.ReactNode;
  bottom?: React.ReactNode;
}) => (
  <div>
    <Nav />
    {leftCenter && <div>{leftCenter}</div>}
    {center && <div>{center}</div>}
    {bottom && <div>{bottom}</div>}
  </div>
);
