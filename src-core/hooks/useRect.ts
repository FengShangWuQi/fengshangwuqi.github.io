import { useState, useLayoutEffect, RefObject } from "react";
import { fromEvent, merge as observableMerge } from "rxjs";
import { debounceTime } from "rxjs/operators";

export interface IRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const getRect = (targetElm: Element, relatedElm: Element): IRect => {
  const targetRect = targetElm.getBoundingClientRect();
  const relatedRect = relatedElm.getBoundingClientRect();

  return {
    top: (targetRect.top || 0) - relatedRect.top,
    left: (targetRect.left || 0) - relatedRect.left,
    width: targetRect.width || 0,
    height: targetRect.height || 0,
  };
};

export const useRect = (elmRef: RefObject<Element | null>) => {
  const defaultRect: IRect = {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  };

  const [rect, setRect] = useState(defaultRect);

  useLayoutEffect(() => {
    const refresh = () => {
      if (elmRef.current) {
        setRect(getRect(elmRef.current, document.body));
      }
    };

    refresh();

    const resize$ = fromEvent(globalThis, "resize");
    const orientationchange$ = fromEvent(globalThis, "orientationchange");

    const sub = observableMerge(resize$, orientationchange$)
      .pipe(debounceTime(200))
      .subscribe(refresh);

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return rect;
};
