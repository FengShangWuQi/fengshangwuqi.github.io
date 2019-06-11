import React from "react";

import { rxBehaviorSubject } from "src-core/rxjs";
import { EditLink } from "src-app/storybook/common/Storybook";

import { useObservable } from "..";

const counter$ = new rxBehaviorSubject(0);

export default () => {
  const value = useObservable(counter$, counter$.value);

  return (
    <div>
      <div>{value} time</div>

      <button
        css={{
          marginTop: 24,
        }}
        onClick={() => {
          counter$.next(value + 1);
        }}>
        click
      </button>

      <EditLink path="src-core/react/useObservable.ts" />
    </div>
  );
};
