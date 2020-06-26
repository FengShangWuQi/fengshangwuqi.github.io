import { Heap } from "../src";

describe("heap #data-structures", () => {
  it("should not allow to create instance of the Heap directly", () => {
    const instantiateHeap = () => {
      new Heap([]);
    };

    expect(instantiateHeap).toThrow();
  });
});
