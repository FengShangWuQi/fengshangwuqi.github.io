import { renderHook } from "@testing-library/react-hooks";

import { useDebounce } from "../useDebounce";

describe("useDebounce #core #hooks", () => {
  it("useDebounce", async () => {
    let count = 0;
    const { result, rerender, waitForNextUpdate } = renderHook(() =>
      useDebounce(count, 200),
    );

    count = 20;
    rerender();

    expect(result.current).toBe(0);

    await waitForNextUpdate();

    expect(result.current).toBe(20);
  });
});
