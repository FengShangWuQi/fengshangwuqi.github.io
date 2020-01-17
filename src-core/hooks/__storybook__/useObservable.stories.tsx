import React from "react";
import { BehaviorSubject } from "rxjs";

import { useDesignSystem } from "src-core/ds";

import { useObservable } from "../useObservable";

const counter$ = new BehaviorSubject<number>(0);

export const UseObservableDemo = () => {
  const ds = useDesignSystem();

  const value = useObservable<number>(counter$) as number;

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
