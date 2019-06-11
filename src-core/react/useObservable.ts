import { useState, useEffect } from "react";

import { rxObservable } from "src-core/rxjs";

export const useObservable = <T>(
  observable: rxObservable<T>,
  defaultValue: T,
): T => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const subscription = observable.subscribe(setValue);

    return () => {
      subscription.unsubscribe();
    };
  }, [observable]);

  return value;
};
