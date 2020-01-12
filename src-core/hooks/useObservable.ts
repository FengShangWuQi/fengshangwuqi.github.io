import { useState, useEffect } from "react";
import { Observable } from "rxjs";

export const useObservable = <T>(
  ob$: Observable<T>,
  defaultValue?: T,
): T | undefined => {
  const [value, setValue] = useState<T | undefined>(defaultValue);

  useEffect(() => {
    const sub = ob$.subscribe(setValue);

    return () => {
      sub.unsubscribe();
    };
  }, [ob$]);

  return value;
};
