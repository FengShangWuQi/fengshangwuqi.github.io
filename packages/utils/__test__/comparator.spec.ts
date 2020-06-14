import * as Comparator from "../src/comparator";

describe("Comparator #utils", () => {
  it("should compare with comparator function", () => {
    expect(Comparator.equal(0, 0)).toBe(true);
    expect(Comparator.equal(0, 1)).toBe(false);
    expect(Comparator.equal("a", "a")).toBe(true);
    expect(Comparator.lessThan(1, 2)).toBe(true);
    expect(Comparator.lessThan(-1, 2)).toBe(true);
    expect(Comparator.lessThan("a", "b")).toBe(true);
    expect(Comparator.lessThan("a", "ab")).toBe(true);
    expect(Comparator.lessThan(10, 2)).toBe(false);
    expect(Comparator.lessThanOrEqual(10, 2)).toBe(false);
    expect(Comparator.lessThanOrEqual(1, 1)).toBe(true);
    expect(Comparator.lessThanOrEqual(0, 0)).toBe(true);
    expect(Comparator.greaterThan(0, 0)).toBe(false);
    expect(Comparator.greaterThan(10, 0)).toBe(true);
    expect(Comparator.greaterThanOrEqual(10, 0)).toBe(true);
    expect(Comparator.greaterThanOrEqual(10, 10)).toBe(true);
    expect(Comparator.greaterThanOrEqual(0, 10)).toBe(false);
  });
});
