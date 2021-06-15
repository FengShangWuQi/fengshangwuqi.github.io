import { useMemo } from "react";
import { BehaviorSubject } from "rxjs";

import { useObservable } from "./useObservable";

export const useToggle = (defaultVal = false) => {
  const { on$, show, hide, toggle } = useMemo(() => {
    const on$ = new BehaviorSubject(defaultVal);

    return {
      on$,
      show: () => {
        on$.next(true);
      },
      hide: () => {
        on$.next(false);
      },
      toggle: () => {
        on$.next(!on$.value);
      },
    };
  }, []);

  const on = useObservable(on$);

  return [on, { show, hide, toggle }] as const;
};
