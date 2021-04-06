import { useState, useEffect } from "react";
import { Observable } from "rxjs";

type ObservableValueType<T> = T extends Observable<infer U> ? U : never;

export const useObservable = <T extends Observable<any>>(ob$: T) => {
  const [value, setValue] = useState<ObservableValueType<T>>(
    (ob$ as any).value,
  );

  useEffect(() => {
    const sub = ob$.subscribe(setValue);

    return () => {
      sub.unsubscribe();
    };
  }, [ob$]);

  return value;
};
