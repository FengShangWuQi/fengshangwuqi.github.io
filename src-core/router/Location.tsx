import React, { createContext, useContext, useEffect, useState } from "react";

import { IDictionary } from "utils/object";

import { IHistory, globalHistory } from "./history";

export interface ILocation extends Location {
  state: IDictionary<string>;
}

export interface ILocationProps {
  history?: IHistory;
  children: React.ReactNode;
}

export interface ILocationContext {
  location: ILocation;
  navigateTo: (
    to: string,
    { state, replace }: { state?: IDictionary<string>; replace?: boolean },
  ) => void;
}

export const LocationContext = createContext({} as ILocationContext);
export const LocationProvider = LocationContext.Provider;

export const useLocation = () => useContext(LocationContext);

export const Location = ({
  history = globalHistory,
  children,
}: ILocationProps) => {
  const { navigateTo } = history;
  const [location, setLocation] = useState(history.location);

  useEffect(() => {
    const unsubscribe = history.subscribe(setLocation);

    return unsubscribe;
  }, []);

  return (
    <LocationProvider
      value={{
        location,
        navigateTo,
      }}>
      {children}
    </LocationProvider>
  );
};

export const getLocation = (source: Window): ILocation => ({
  ...source.location,
  state: source.history.state || { key: `${Date.now()}-navigate` },
});
