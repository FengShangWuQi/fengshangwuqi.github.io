import React from "react";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

import { EditLink } from "src-app/storybook/common/Storybook";

import { useObservable } from "..";

const number$ = interval(200).pipe(take(100));

export default () => {
  const value = useObservable(number$);

  return (
    <div>
      <div>value: {value}</div>

      <EditLink path="src-core/react/useObservable.ts" />
    </div>
  );
};
