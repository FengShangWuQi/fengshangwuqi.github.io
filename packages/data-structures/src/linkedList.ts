import { comparator } from "@fengshangwuqi/utils";

export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T, next: LinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?: (value: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value: T) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value: T) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail!.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value: T) {
    let deleteNode = null;

    if (!this.head) {
      return deleteNode;
    }

    while (this.head && comparator.equal(this.head.value, value)) {
      deleteNode = this.head;
      this.head = deleteNode.next;
    }

    let currNode = this.head;

    if (currNode !== null) {
      while (currNode.next) {
        if (comparator.equal(currNode.next.value, value)) {
          deleteNode = currNode.next;
          currNode.next = deleteNode.next;
        } else {
          currNode = currNode.next;
        }
      }
    }

    if (comparator.equal(this.tail!.value, value)) {
      this.tail = currNode;
    }

    return deleteNode;
  }

  find({ value, callback }: { value?: T; callback?: (value: T) => boolean }) {
    let currNode = this.head;

    if (!this.head) {
      return currNode;
    }

    while (currNode) {
      if (callback && callback(currNode.value)) {
        return currNode;
      }

      if (comparator.equal(currNode.value, value)) {
        return currNode;
      }

      currNode = currNode.next;
    }

    return null;
  }

  deleteTail() {
    const tailNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return tailNode;
    }

    let currNode = this.head;

    while (currNode!.next) {
      if (currNode!.next.next === null) {
        currNode!.next = null;
      } else {
        currNode = currNode!.next;
      }
    }

    this.tail = currNode;

    return tailNode;
  }

  deleteHead() {
    const headNode = this.head;

    if (!this.head) {
      return headNode;
    }

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return headNode;
  }

  fromArray(values: T[]) {
    values.forEach(value => this.append(value));

    return this;
  }

  toArray() {
    const nodes = [];

    let currNode = this.head;

    while (currNode) {
      nodes.push(currNode);
      currNode = currNode.next;
    }

    return nodes;
  }

  toString(callback?: (value: T) => string) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
