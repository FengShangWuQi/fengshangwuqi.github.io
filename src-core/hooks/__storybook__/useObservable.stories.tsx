import React, { useMemo } from "react";
import { BehaviorSubject } from "rxjs";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

import { Button } from "src-components/basic/button";

import { useObservable } from "../useObservable";

export const UseObservableDemo = () => {
  const ds = useDesignSystem();

  const counter$ = useMemo(() => new BehaviorSubject(0), []);

  const value = useObservable(counter$);

  return (
    <div
      css={{
        ...flex({
          alignItems: "center",
        }),
      }}>
      <Button onClick={() => counter$.next(value + 1)}>click</Button>

      <div
        css={{
          marginLeft: ds.spacing[2],
        }}>
        {value}
      </div>
    </div>
  );
};
