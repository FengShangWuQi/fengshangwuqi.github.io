import { createContext, useContext } from "react";

import { IDictionary } from "utils/object";

export interface ILocation extends Location {
  state: IDictionary<string>;
}

export interface ILocationContext {
  location: ILocation;
  navigateTo: (to: string, state: IDictionary<string>) => void;
}

export const LocationContext = createContext({} as ILocationContext);

export const LocationProvider = LocationContext.Provider;

export const useLocation = () => useContext(LocationContext);
