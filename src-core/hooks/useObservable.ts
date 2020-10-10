import { useState, useEffect } from "react";
import { Observable } from "rxjs";

export const useObservable = <T>(ob$: Observable<T>, defaultValue: T): T => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const sub = ob$.subscribe(setValue);

    return () => {
      sub.unsubscribe();
    };
  }, [ob$]);

  return value;
};
