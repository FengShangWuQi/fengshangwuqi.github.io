import React, { useLayoutEffect, useRef } from "react";
import { animationFrameScheduler, interval } from "rxjs";
import { observeOn, take } from "rxjs/operators";

import { useDesignSystem } from "src-core/ds";

import { useRect } from "../useRect";

export const UseRectDemo = () => {
  const ds = useDesignSystem();

  const ref = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const [rootRect] = useRect(rootRef);
  const [rect, refreshRect] = useRect(ref);

  useLayoutEffect(() => {
    const intervals = interval(10);

    const intervalSub = intervals
      .pipe(observeOn(animationFrameScheduler), take(rootRect.width))
      .subscribe(val => {
        if (ref.current) {
          ref.current.style.width = `${val}px`;
        }
        refreshRect();
      });

    return () => {
      intervalSub.unsubscribe();
    };
  }, [rootRect]);

  return (
    <div ref={rootRef}>
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
