import { useState, useEffect } from "react";
import { Observable } from "rxjs";

export const useObservable = <T>(
  observable: Observable<T>,
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
