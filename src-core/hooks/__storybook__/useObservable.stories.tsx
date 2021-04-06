import React, { useMemo } from "react";
import { BehaviorSubject } from "rxjs";

import { useDesignSystem } from "src-core/ds";

import { useObservable } from "../useObservable";

export const UseObservableDemo = () => {
  const ds = useDesignSystem();

  const counter$ = useMemo(() => new BehaviorSubject(0), []);

  const value = useObservable(counter$);

  return (
    <div>
      <div>{value}</div>

      <button
        css={{
          marginTop: ds.spacing[2],
        }}
        onClick={() => counter$.next(value + 1)}>
        click
      </button>
    </div>
  );
};
