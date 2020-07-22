import { LinkedList } from "../src";

describe("linked-list #data-structures", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.toString()).toBe("");
  });

  it("should append node to linked list", () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe("1,2");
  });

  it("should prepend node to linked list", () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.prepend(2);

    expect(linkedList.toString()).toBe("2,1");
  });

  it("should create linked list from array", () => {
    const linkedList = new LinkedList();

    linkedList.fromArray([1, 2]);

    expect(linkedList.toString()).toBe("1,2");
  });

  it("should delete node from linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(3)).toBeNull();

    linkedList.fromArray([1, 2, 3, 4, 5]);

    expect(linkedList.delete(3)?.value).toBe(3);
    expect(linkedList.toString()).toBe("1,2,4,5");
    expect(linkedList.deleteHead()?.value).toBe(1);
    expect(linkedList.toString()).toBe("2,4,5");
    expect(linkedList.deleteTail()?.value).toBe(5);
    expect(linkedList.toString()).toBe("2,4");
  });

  it("custom toString callback", () => {
    const linkedList = new LinkedList<{ value: number; label: string }>();

    linkedList.fromArray([
      { value: 1, label: "a" },
      { value: 2, label: "b" },
    ]);

    expect(
      linkedList.toString(({ value, label }) => `${label}: ${value}`),
    ).toBe(`a: 1,b: 2`);
  });

  it("should find node", () => {
    const linkedList = new LinkedList<number>();

    expect(linkedList.find({ value: 5 })).toBeNull();

    linkedList.fromArray([1, 2]);

    expect(linkedList.find({ value: 3 })).toBeNull();
    expect(linkedList.find({ value: 2 })?.value).toBe(2);
    expect(linkedList.find({ callback: value => value === 1 })?.value).toBe(1);
  });

  it("should reverse linked lis", () => {
    const linkedList = new LinkedList();

    linkedList.fromArray([1, 2, 3, 4, 5]);

    linkedList.reverse();
    expect(linkedList.toString()).toBe("5,4,3,2,1");
    linkedList.reverse();
    expect(linkedList.toString()).toBe("1,2,3,4,5");
  });
});
