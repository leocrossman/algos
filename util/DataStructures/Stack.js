class Stack {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(val) {
    this.storage[this.length++] = val;
  }

  pop() {
    const popped = this.storage[--this.length];
    delete this.storage[this.length + 1];
    return popped;
  }
}
