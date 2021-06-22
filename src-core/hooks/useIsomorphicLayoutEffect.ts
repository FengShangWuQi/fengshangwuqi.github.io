import { useEffect, useLayoutEffect } from "react";

/*
 * use useIsomorphicLayoutEffect in place of useLayoutEffect to avoid SSR warning
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
