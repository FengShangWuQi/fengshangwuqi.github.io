import { renderHook, act } from "@testing-library/react-hooks";

import { useLocalStorage } from "../useLocalStorage";

afterEach(() => localStorage.clear());

describe("useLocalStorage #core #react", () => {
  it("when value - with curr value", () => {
    const { result } = renderHook(() => useLocalStorage("count", 2));

    expect(result.current[0]).toBe(2);

    act(() => {
      result.current[1](20);
    });

    expect(result.current[0]).toBe(20);
    expect(JSON.parse(localStorage.getItem("count") as string)).toBe(20);
  });

  it("when function - with calculated value", () => {
    const { result } = renderHook(() => useLocalStorage("count", 2));

    act(() => {
      result.current[1]((value: number) => value + 1);
    });

    expect(result.current[0]).toBe(3);
  });
});
