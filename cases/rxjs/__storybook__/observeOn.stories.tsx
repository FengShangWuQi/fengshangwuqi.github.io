import React, { useState, useEffect } from "react";
import { interval, animationFrameScheduler } from "rxjs";
import { observeOn, take } from "rxjs/operators";
import { border } from "polished";

import { useDesignSystem } from "src-core/ds";

export const ProgressBarWithAnimationFrame = () => {
  const ds = useDesignSystem();

  const [width, setWidth] = useState(1);

  useEffect(() => {
    const intervals = interval(10);

    const sub = intervals
      .pipe(take(500), observeOn(animationFrameScheduler))
      .subscribe(val => {
        setWidth(width + val);
      });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <div
      css={{
        ...border(1, "solid", ds.color.secondary),
        height: 40,
        width: 500,
      }}>
      <div
        css={{
          height: 40,
          width,
          background: ds.color.secondary,
        }}></div>
    </div>
  );
};

export const ProgressBar = () => {
  const ds = useDesignSystem();

  const [width, setWidth] = useState(1);

  useEffect(() => {
    const intervals = interval(10);

    const sub = intervals.pipe(take(500)).subscribe(val => {
      setWidth(width + val);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <div
      css={{
        ...border(1, "solid", ds.color.secondary),
        height: 40,
        width: 500,
      }}>
      <div
        css={{
          height: 40,
          width,
          background: ds.color.secondary,
        }}></div>
    </div>
  );
};
