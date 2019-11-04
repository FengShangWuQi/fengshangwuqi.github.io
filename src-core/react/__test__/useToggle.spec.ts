import { renderHook, act } from "@testing-library/react-hooks";

import { useToggle } from "../useToggle";

describe("useToggle #core #react", () => {
  it("when default - with false", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });

  it("when add default value true - with true", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
  });
});
