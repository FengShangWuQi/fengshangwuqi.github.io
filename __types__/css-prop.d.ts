import {} from "react";
import { Interpolation } from "@emotion/serialize";

import { ITheme } from "../src-core/ds/default-theme";

declare module "react" {
  interface Attributes {
    css?: Interpolation<ITheme>;
  }
}
