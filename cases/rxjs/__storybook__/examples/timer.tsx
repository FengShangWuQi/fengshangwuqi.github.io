import React, { useState, useEffect } from "react";

import { timer } from "rxjs";

export const DueTime = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sub = timer(2000).subscribe(() => setCount(1));

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return <div>{count}</div>;
};

export const PeriodOrScheduler = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numbers = timer(2000, 1000);
    const sub = numbers.subscribe(setCount);

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return <div>{count}</div>;
};
