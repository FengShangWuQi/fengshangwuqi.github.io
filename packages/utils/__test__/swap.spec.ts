import { swap } from "../src/swap";

describe("comparator #utils", () => {
  it("should compare with comparator function", () => {
    expect(swap([1, 2, 3], 0, 2)).toEqual([3, 2, 1]);
  });
});
