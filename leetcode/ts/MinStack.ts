interface Stack {
  [key: string]: Node;
}

class Node {
  min: number;
  val: number;
  constructor(val: number, min: number | undefined) {
    this.val = val;
    this.min = min ?? val;
  }
}

class MinStack {
  min: number;
  stack: Stack;
  length: number;
  constructor() {
    this.stack = {};
    this.length = 0;
    this.min = Infinity;
  }

  push(val: number): void {
    this.stack[this.length++] = new Node(val, Math.min(this.getMin(), val));
  }

  pop(): void {
    this.stack[--this.length];
    delete this.stack[this.length];
    this.min = this.stack[this.length - 1].min;
  }

  top(): number {
    return this.stack[this.length - 1].val;
  }

  getMin(): number {
    console.log(this.stack);
    return this.stack[this.length - 1].min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
