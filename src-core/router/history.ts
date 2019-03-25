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

  const navigateTo = (
    to: string,
    {
      state,
      replace = false,
    }: { state?: IDictionary<string>; replace?: boolean },
  ) => {
    if (replace) {
      source.history.replaceState(state, "", to);
    } else {
      source.history.pushState(state, "", to);
    }

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

const createSource = () => {
  const states: IDictionary<string>[] = [];
  const stack = [{ pathname: "/", search: "" }];

  let index = 0;

  const location = stack[index];

  const state = states[index];

  const pushState = (state: IDictionary<string>, _: string, uri: string) => {
    const [pathname, search = ""] = uri.split("?");
    index++;
    stack.push({ pathname, search });
    states.push(state);
  };

  return {
    location,
    history: {
      state,
      pushState,
    },
  };
};

const getSource = () => (canUseDOM ? window : createSource());
const source = getSource();

export const globalHistory = createHistory(source as Window);
