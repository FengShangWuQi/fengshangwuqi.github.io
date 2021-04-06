import { renderHook, act } from "@testing-library/react-hooks";
import { BehaviorSubject, Subject } from "rxjs";

import { useObservable } from "../useObservable";

describe("useObservable #core #hooks", () => {
  it("when use Subject - with undefined", () => {
    const number$ = new Subject<number>();

    const { result } = renderHook(() => useObservable(number$));
    expect(result.current).toBe(undefined);

    act(() => {
      number$.next(1);
    });

    expect(result.current).toBe(1);
  });

  it("when use BehaviorSubject - with value 1", () => {
    const number$ = new BehaviorSubject(1);

    const { result } = renderHook(() => useObservable(number$));
    expect(result.current).toBe(1);

    act(() => {
      number$.next(2);
    });

    expect(result.current).toBe(2);
  });
});
