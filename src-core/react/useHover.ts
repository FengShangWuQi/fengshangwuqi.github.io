import { useState, useRef, useEffect, RefObject } from "react";

import { rxFromEvent } from "src-core/rxjs";

export const useHover = (): [RefObject<any>, boolean] => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(null);

  useEffect(() => {
    const node = hoverRef.current;

    const mouseover$ = rxFromEvent(node!, "mouseover").subscribe(() =>
      setIsHovered(true),
    );
    const mouseout$ = rxFromEvent(node!, "mouseout").subscribe(() =>
      setIsHovered(false),
    );

    return () => {
      mouseover$.unsubscribe();
      mouseout$.unsubscribe();
    };
  }, [hoverRef.current]);

  return [hoverRef, isHovered];
};
