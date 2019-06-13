import React from "react";

import { rxInterval, rxTake } from "src-core/rxjs";
import { EditLink } from "src-app/storybook/common/Storybook";

import { useObservable } from "..";

const number$ = rxInterval(200).pipe(rxTake(100));

export default () => {
  const value = useObservable(number$);

  return (
    <div>
      <div>value: {value}</div>

      <EditLink path="src-core/react/useObservable.ts" />
    </div>
  );
};
