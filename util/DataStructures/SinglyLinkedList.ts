export class Node {
  val: number;
  next: Node | null;
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: Node | null;
  constructor(head?: Node | null) {
    this.head = head === undefined ? null : head;
  }
}
