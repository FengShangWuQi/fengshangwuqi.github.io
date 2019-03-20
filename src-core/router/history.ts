import { IDictionary } from "utils/object";
import { canUseDOM } from "utils/dom";

import { getLocation, ILocation } from "./Location";

export interface IHistory {
  location: ILocation;
  navigateTo: (to: string, state: IDictionary<string>) => void;
}

export const createHistory = (source: Window): IHistory => {
  let location = getLocation(source);

  const navigateTo = (to: string, state: IDictionary<string>) => {
    source.history.pushState({ ...state, key: `${Date.now()}` }, "", to);
    location = getLocation(source);
  };

  return {
    location,
    navigateTo,
  };
};

const getSource = () => (canUseDOM ? window : {});
const source = getSource();

export const globalHistory = createHistory(source as Window);
export const { navigateTo } = globalHistory;
