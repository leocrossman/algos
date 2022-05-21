interface Stack {
  [key: string]: MinStackNode;
}

class MinStackNode {
  min: number;
  val: number;
  constructor(val: number, min: number | undefined) {
    this.val = val;
    this.min = min ?? val;
  }
}

class MinStack {
  stack: Stack;
  length: number;
  stackMin: number;
  constructor() {
    this.stack = {};
    this.length = 0;
    this.stackMin = Infinity;
  }

  push(val: number): void {
    this.stackMin = Math.min(this.stackMin, val);
    this.stack[this.length++] = new MinStackNode(val, this.stackMin);
  }

  pop(): void {
    this.stack[--this.length];
    delete this.stack[this.length];
    this.stackMin = this.stack[this.length - 1]?.min ?? Infinity;
  }

  top(): number {
    return this.stack[this.length - 1].val;
  }

  getMin(): number {
    return this.stackMin;
  }
}
console.clear();
const ms = new MinStack();
ms.push(-2);
ms.push(0);
ms.push(-3);
console.log(ms.getMin());
ms.pop();
console.log(ms.top());
console.log(ms.getMin());
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
