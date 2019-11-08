import React, { createContext, useContext } from "react";

import { Dictionary } from "lodash";

export const RouteContext = createContext({} as Dictionary<any>);
export const RouteProvider = RouteContext.Provider;

export const useRoute = () => useContext(RouteContext);

export const Route = ({
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => <>{children}</>;
