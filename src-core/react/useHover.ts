import { useState, useRef, useEffect, RefObject } from "react";
import { fromEvent } from "rxjs";

export const useHover = (): [RefObject<any>, boolean] => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(null);

  useEffect(() => {
    const node = hoverRef.current;

    const mouseover$ = fromEvent(node!, "mouseover").subscribe(() =>
      setIsHovered(true),
    );
    const mouseout$ = fromEvent(node!, "mouseout").subscribe(() =>
      setIsHovered(false),
    );

    return () => {
      mouseover$.unsubscribe();
      mouseout$.unsubscribe();
    };
  }, [hoverRef.current]);

  return [hoverRef, isHovered];
};
