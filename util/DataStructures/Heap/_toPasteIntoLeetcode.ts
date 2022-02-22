export class Heap {
  heap: number[];
  compare: Comparator;
  constructor(comparatorFunc?: Comparator) {
    if (new.target === Heap)
      throw new TypeError('Cannot construct Heap instance directly');
    this.heap = [];
    this.compare = new Comparator(comparatorFunc);
  }

  getLeftChildIdx(parentIdx: number): number {
    return 2 * parentIdx + 1;
  }

  getRightChildIdx(parentIdx: number): number {
    return 2 * parentIdx + 2;
  }

  getParentIdx(childIdx: number): number {
    return Math.floor((childIdx - 1) / 2);
  }

  hasParent(childIdx: number): boolean {
    return this.getParentIdx(childIdx) >= 0;
  }

  hasLeftChild(parentIdx: number): boolean {
    return this.getLeftChildIdx(parentIdx) < this.heap.length;
  }

  hasRightChild(parentIdx: number): boolean {
    return this.getRightChildIdx(parentIdx) < this.heap.length;
  }

  getLeftChild(parentIdx: number): number {
    return this.heap[this.getLeftChildIdx(parentIdx)];
  }
  getRightChild(parentIdx: number): number {
    return this.heap[this.getRightChildIdx(parentIdx)];
  }
  getParent(childIdx: number): number {
    return this.heap[this.getParentIdx(childIdx)];
  }
  swap(i: number, j: number) {
    const temp = this.heap[j];
    this.heap[j] = this.heap[i];
    this.heap[i] = temp;
  }
  add(item) {
    this.heap.push(item);
    this.heapifyUp();
    return this;
  }
  remove(item, comparator = this.compare) {
    // Find number of items to remove.
    const numberOfItemsToRemove = this.find(item, comparator).length;

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      // We need to find item index to remove each time after removal since
      // indices are being changed after each heapify process.
      const indexToRemove = this.find(item, comparator).pop();

      // If we need to remove last child in the heap then just remove it.
      // There is no need to heapify the heap afterwards.
      if (indexToRemove === this.heap.length - 1) {
        this.heap.pop();
      } else {
        // Move last element in heap to the vacant (removed) position.
        this.heap[indexToRemove] = this.heap.pop();

        // Get parent.
        const parentItem = this.getParent(indexToRemove);

        // If there is no parent or parent is in correct order with the node
        // we're going to delete then heapify down. Otherwise heapify up.
        if (
          this.hasLeftChild(indexToRemove) &&
          (!parentItem ||
            this.pairIsInCorrectOrder(parentItem, this.heap[indexToRemove]))
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }

    return this;
  }

  /**
   * @param {*} item
   * @param {Comparator} [comparator]
   * @return {Number[]}
   */
  find(item, comparator = this.compare) {
    const foundItemIndices = [];

    for (let itemIndex = 0; itemIndex < this.heap.length; itemIndex += 1) {
      if (comparator.equal(item, this.heap[itemIndex])) {
        foundItemIndices.push(itemIndex);
      }
    }

    return foundItemIndices;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.heap.length;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.heap.toString();
  }

  /**
   * @param {number} [customStartIndex]
   */
  heapifyUp(customStartIndex?) {
    // Take the last element (last in array or the bottom left in a tree)
    // in the heap container and lift it up until it is in the correct
    // order with respect to its parent element.
    let currentIndex = customStartIndex || this.heap.length - 1;

    while (
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(
        this.getParent(currentIndex),
        this.heap[currentIndex]
      )
    ) {
      this.swap(currentIndex, this.getParentIdx(currentIndex));
      currentIndex = this.getParentIdx(currentIndex);
    }
  }

  /**
   * @param {number} [customStartIndex]
   */
  heapifyDown(customStartIndex = 0) {
    // Compare the parent element to its children and swap parent with the appropriate
    // child (smallest child for MinHeap, largest child for MaxHeap).
    // Do the same for next children after swap.
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.pairIsInCorrectOrder(
          this.getRightChild(currentIndex),
          this.getLeftChild(currentIndex)
        )
      ) {
        nextIndex = this.getRightChildIdx(currentIndex);
      } else {
        nextIndex = this.getLeftChildIdx(currentIndex);
      }

      if (
        this.pairIsInCorrectOrder(this.heap[currentIndex], this.heap[nextIndex])
      ) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  /* istanbul ignore next */
  pairIsInCorrectOrder(firstElement, secondElement): boolean | never {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }
}

export class Comparator {
  compare: (a, b) => number;
  constructor(compareFunc) {
    this.compare = compareFunc || Comparator.defaultCompareFunc;
  }

  static defaultCompareFunc(a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }

  equal(a, b): boolean {
    return this.compare(a, b) === 0;
  }

  lessThan(a, b): boolean {
    return this.compare(a, b) < 0;
  }

  greaterThan(a, b): boolean {
    return this.compare(a, b) > 0;
  }

  lessThanOrEqual(a, b): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThanOrEqual(a, b): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}

export class MaxHeap extends Heap {
  pairIsInCorrectOrder(firstElement: any, secondElement: any): boolean {
    return this.compare.greaterThanOrEqual(firstElement, secondElement);
  }
}
