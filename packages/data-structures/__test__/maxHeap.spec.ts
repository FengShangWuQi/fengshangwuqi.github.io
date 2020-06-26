import { MaxHeap } from "../src";

const originArr = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2];

describe("maxHeap #data-structures", () => {
  it("should create max heap", () => {
    expect(new MaxHeap([]).isEmpty()).toBe(true);
    expect(new MaxHeap(originArr).heapArr).toEqual(originArr);
  });

  it("should down adjust", () => {
    expect(new MaxHeap(originArr).build()).toEqual([
      4,
      4,
      4,
      3,
      2,
      0,
      2,
      1,
      3,
      0,
    ]);
  });

  it("should sort array", () => {
    const maxHeap = new MaxHeap(originArr);

    maxHeap.build();
    expect(maxHeap.sort()).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
  });
});
