import React, { useLayoutEffect, useRef } from "react";
import { animationFrameScheduler, interval, timer } from "rxjs";
import { observeOn, takeUntil } from "rxjs/operators";

import { useDesignSystem } from "src-core/ds";

import { useRect } from "../useRect";

export const UseRectDemo = () => {
  const ds = useDesignSystem();

  const ref = useRef<HTMLDivElement>(null);
  const [rect, refreshRect] = useRect(ref);

  useLayoutEffect(() => {
    const intervals = interval(10);
    const numbers = timer(5000);

    const intervalSub = intervals
      .pipe(observeOn(animationFrameScheduler), takeUntil(numbers))
      .subscribe(val => {
        if (ref.current) {
          ref.current.style.width = `${val}px`;
        }
        refreshRect();
      });

    const numberSub = numbers.subscribe(() => {
      if (ref.current) {
        ref.current.style.width = "100%";
      }
      refreshRect();
    });

    return () => {
      intervalSub.unsubscribe();
      numberSub.unsubscribe();
    };
  }, []);

  return (
    <div>
      <div
        ref={ref}
        css={{
          height: 50,
          border: `1px solid ${ds.color.text}`,
          boxSizing: "border-box",
        }}
      />

      <div>width: {rect.width}</div>
    </div>
  );
};
