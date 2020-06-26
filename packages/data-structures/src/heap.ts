import { comparator, swap } from "@fengshangwuqi/utils";

export class Heap<T> {
  heapArr: T[];

  constructor(arr: T[]) {
    if (new.target === Heap) {
      throw new TypeError("Cannot construct Heap instance directly");
    }

    this.heapArr = [...arr];
  }

  getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this.heapArr.length;
  }

  hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this.heapArr.length;
  }

  leftChild(parentIndex: number): T {
    return this.heapArr[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex: number): T {
    return this.heapArr[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex: number): T {
    return this.heapArr[this.getParentIndex(childIndex)];
  }

  add(item: T): T[] {
    this.heapArr.push(item);
    this.upAdjust();

    return this.heapArr;
  }

  poll(): T | undefined {
    if (this.heapArr.length === 0) {
      return void 0;
    }

    if (this.heapArr.length === 1) {
      return this.heapArr.pop() as T;
    }

    const item = this.heapArr[0];

    this.heapArr[0] = this.heapArr.pop() as T;
    this.downAdjust();

    return item;
  }

  sort(visitFn?: () => void): T[] {
    for (let i = 0; i < this.heapArr.length - 1; i++) {
      visitFn?.();

      swap(this.heapArr, 0, this.heapArr.length - 1 - i);

      this.downAdjust(0, this.heapArr.length - 1 - i - 1);
    }

    return this.heapArr;
  }

  upAdjust(startIndex?: number) {
    let currentIndex = startIndex || this.heapArr.length - 1;

    while (
      this.hasParent(currentIndex) &&
      this.compareFn(this.heapArr[currentIndex], this.parent(currentIndex))
    ) {
      swap(this.heapArr, currentIndex, this.getParentIndex(currentIndex));

      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  downAdjust(startIndex = 0, endIndex = this.heapArr.length - 1) {
    let currentIndex = startIndex;
    let nextIndex = 0;

    while (
      this.getLeftChildIndex(currentIndex) <= endIndex &&
      this.hasLeftChild(currentIndex)
    ) {
      if (
        this.getRightChildIndex(currentIndex) <= endIndex &&
        this.hasRightChild(currentIndex) &&
        this.compareFn(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex),
        )
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.compareFn(this.heapArr[currentIndex], this.heapArr[nextIndex])) {
        break;
      }

      swap(this.heapArr, currentIndex, nextIndex);

      currentIndex = nextIndex;
    }
  }

  isEmpty(): boolean {
    return !this.heapArr.length;
  }

  compareFn(..._: any): boolean {
    throw new Error(`with no compareFn`);
  }
}

export class MinHeap<T> extends Heap<T> {
  build(visitFn?: () => void): T[] {
    for (let i = Math.floor(this.heapArr.length / 2 - 1); i >= 0; i--) {
      visitFn?.();

      this.downAdjust(i);
    }

    return this.heapArr;
  }

  compareFn(a: T, b: T): boolean {
    return comparator.lessThan(a, b);
  }
}

export class MaxHeap<T> extends Heap<T> {
  build(visitFn?: () => void): T[] {
    for (let i = 1; i <= this.heapArr.length - 1; i++) {
      visitFn?.();

      this.upAdjust(i);
    }

    return this.heapArr;
  }

  compareFn(a: T, b: T): boolean {
    return comparator.greaterThan(a, b);
  }
}
