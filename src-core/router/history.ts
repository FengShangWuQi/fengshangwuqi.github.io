import { IDictionary } from "utils/object";
import { canUseDOM } from "utils/dom";

import { ILocation, ILocationContext } from "./Location";

const getLocation = (source: Window): ILocation => ({
  ...source.location,
  state: source.history.state || `${Date.now()}-init`,
});

export const createHistory = (source: Window): ILocationContext => {
  let location = getLocation(source);

  const navigateTo = (to: string, state: IDictionary<string>) => {
    source.history.pushState(state, "", to);
    location = getLocation(source);
  };

  return {
    location,
    navigateTo,
  };
};

const getSource = () => canUseDOM && window;

const source = getSource();

export const globalHistory = createHistory(source as Window);
