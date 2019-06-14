import { useState, RefObject, useEffect } from "react";

export const useVisibilitySensor = (
  ref: RefObject<Element>,
  options: IntersectionObserverInit,
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      io.observe(ref.current);
    }

    return () => {
      io.disconnect();
    };
  }, []);

  return isIntersecting;
};
