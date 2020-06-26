import { MinHeap } from "../src";

const originArr = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2];

describe("minHeap #data-structures", () => {
  it("should create max heap", () => {
    expect(new MinHeap([]).isEmpty()).toBe(true);
    expect(new MinHeap(originArr).heapArr).toEqual(originArr);
  });

  it("should up adjust", () => {
    expect(new MinHeap(originArr).build()).toEqual([
      0,
      1,
      0,
      3,
      2,
      2,
      4,
      3,
      4,
      4,
    ]);
  });

  it("should sort array", () => {
    const minHeap = new MinHeap(originArr);

    minHeap.build();
    expect(minHeap.sort()).toEqual([4, 4, 4, 3, 3, 2, 2, 1, 0, 0]);
  });
});
