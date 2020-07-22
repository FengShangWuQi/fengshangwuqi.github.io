import { LinkedListNode } from "../src";

describe("linked-list-node #data-structures", () => {
  it("should create list node with value", () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it("should create list node with object as a value", () => {
    const node = new LinkedListNode({ a: 1 });

    expect(node.value).toEqual({ a: 1 });
    expect(node.next).toBeNull();
  });

  it("should link nodes together", () => {
    const node = new LinkedListNode(1);
    const node2 = new LinkedListNode(2, node);

    expect(node2.next).toEqual(node);
    expect(node.next).toBeNull();
  });

  it("should convert node to string", () => {
    const node = new LinkedListNode(1);
    const node2 = new LinkedListNode<{ value: number; label: string }>({
      value: 1,
      label: "a",
    });

    expect(node.toString()).toBe("1");
    expect(node2.toString(({ value, label }) => `${label}: ${value}`)).toBe(
      "a: 1",
    );
  });
});
