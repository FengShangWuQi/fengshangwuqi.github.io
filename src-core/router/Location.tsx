import React, { createContext, useContext } from "react";

import { IDictionary } from "utils/object";

import { IHistory, globalHistory } from "./history";

export interface ILocation extends Location {
  state: IDictionary<string>;
}

export interface ILocationProps {
  history?: IHistory;
  pathPrefix?: string;
  children: React.ReactNode;
}

export interface ILocationContext extends IHistory {
  pathPrefix: string;
}

export const LocationContext = createContext({} as ILocationContext);
export const LocationProvider = LocationContext.Provider;

export const useLocation = () => useContext(LocationContext);

export const Location = ({
  history = globalHistory,
  pathPrefix = "/",
  children,
}: ILocationProps) => {
  return (
    <LocationProvider
      value={{
        ...history,
        pathPrefix,
      }}>
      {children}
    </LocationProvider>
  );
};

export const getLocation = (source: Window): ILocation => ({
  ...source.location,
  state: source.history.state || { key: `${Date.now()}-init` },
});
