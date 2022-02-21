const { Stack } = require('../util/DataStructures/Stack');

describe('Stack Tests', () => {
  const myStack = new Stack();

  it('should have a "length" property.', () => {
    expect(myStack.length).toBeDefined();
    expect(myStack.length).toBe(0);
  });

  describe('Stack.push tests', () => {
    it('should have a push method', () => {
      expect(myStack.push).toBeDefined();
      expect(typeof myStack.push).toBe('function');
    });

    it('should add value to stack', () => {
      myStack.push(1);
      expect(myStack.stack[0]).toBe(1);
    });

    it('should increment length', () => {
      expect(myStack.length).toBe(1);
    });

    it('should add new values to top (end) of stack', () => {
      myStack.push(2);
      myStack.push(3);
      myStack.push(4);
      myStack.push(5);
      expect(myStack.stack[1]).toBe(2);
      expect(myStack.stack[4]).toBe(5);
    });
  });

  describe('Stack.pop tests', () => {
    it('should have a pop method', () => {
      expect(myStack.pop).toBeDefined();
      expect(typeof myStack.pop).toBe('function');
    });

    it('should remove and return value from top (end) of stack', () => {
      expect(myStack.pop()).toBe(5);
      expect(myStack.stack[4]).toBeUndefined();
    });

    it('should decrement length', () => {
      expect(myStack.length).toBe(4);
    });
  });
});
