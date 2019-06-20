import { useState, useEffect } from "react";

import { rxObservable } from "src-core/rxjs";

export const useObservable = <T>(
  observable: rxObservable<T>,
  defaultValue?: T,
) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const subscription = observable.subscribe(setValue as (value: T) => void);

    return () => {
      subscription.unsubscribe();
    };
  }, [observable]);

  return value;
};
