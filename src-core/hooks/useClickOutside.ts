import { useEffect, RefObject } from "react";
import { fromEvent } from "rxjs";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    const click$ = fromEvent(document, "click").subscribe(handleClick);

    return () => {
      click$.unsubscribe();
    };
  }, [ref, handler]);
};
