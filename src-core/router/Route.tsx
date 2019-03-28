import React, { createContext, useContext } from "react";

import { IDictionary } from "utils/object";

export const RouteContext = createContext({} as IDictionary<any>);
export const RouteProvider = RouteContext.Provider;

export const useRoute = () => useContext(RouteContext);

export const Route = ({
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => <>{children}</>;
