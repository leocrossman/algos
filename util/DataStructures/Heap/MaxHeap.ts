import Heap from './Heap';

export default class MaxHeap extends Heap {
  pairIsInCorrectOrder(firstElement: any, secondElement: any): boolean {
    return this.compare.greaterThanOrEqual(firstElement, secondElement);
  }
}

const heap = new MaxHeap();
heap.add(2);
