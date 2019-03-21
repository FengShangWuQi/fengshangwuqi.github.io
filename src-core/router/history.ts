import { rxBehaviorSubject, rxFromEvent } from "src-core/rxjs";

import { IDictionary } from "utils/object";
import { canUseDOM } from "utils/dom";

import { getLocation, ILocationContext, ILocation } from "./Location";

export interface IHistory extends ILocationContext {
  subscribe: (fn: (value: ILocation) => void) => void;
}

export const createHistory = (source: Window): IHistory => {
  const location = getLocation(source);
  const location$ = new rxBehaviorSubject(location);

  const navigateTo = (to: string, state?: IDictionary<string>) => {
    source.history.pushState({ ...state, key: `${Date.now()}` }, "", to);
    location$.next(getLocation(source));
  };

  const subscribe = (fn: (value: ILocation) => void) => {
    const sub$ = location$.subscribe(fn);

    const popstate$ = rxFromEvent(source, "popstate").subscribe(() => {
      location$.next(getLocation(source));
    });

    return () => {
      sub$.unsubscribe();
      popstate$.unsubscribe();
    };
  };

  return {
    location,
    navigateTo,
    subscribe,
  };
};

const getSource = () => (canUseDOM ? window : {});
const source = getSource();

export const globalHistory = createHistory(source as Window);
export const { navigateTo } = globalHistory;
