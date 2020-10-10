import { renderHook } from "@testing-library/react-hooks";
import { BehaviorSubject, Subject } from "rxjs";

import { useObservable } from "../useObservable";

describe("useObservable #core #hooks", () => {
  it("when add default value 1 - with default value 1", () => {
    const number$ = new Subject<number>();

    const { result } = renderHook(() => useObservable(number$, 1));

    expect(result.current).toBe(1);
  });

  it("when add 1 - with value 1", () => {
    const number$ = new BehaviorSubject(1);

    const { result } = renderHook(() => useObservable(number$, number$.value));

    expect(result.current).toBe(1);
  });
});
