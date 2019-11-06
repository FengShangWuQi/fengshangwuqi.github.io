import React from "react";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

import { useObservable } from "../../useObservable";

const number$ = interval(200).pipe(take(100));

export const UseObservableDemo = () => {
  const value = useObservable(number$);

  return <div>value: {value}</div>;
};
