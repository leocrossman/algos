const mergeKLists = require('../leetcode/23.MergekSortedLists');

describe('mergeKLists', () => {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  let a1, a2, a3, b1, b2, b3, c1, c2;
  let ans;
  // beforeEach(() => {});

  // it('should work on empty arrays', () => {
  //   expect(mergeKLists([])).toEqual([]);
  // });
  // it('should work on a singular empty list', () => {
  //   expect(mergeKLists([[]])).toEqual([]);
  // });
  // it('should work on a multiple empty lists', () => {
  //   expect(mergeKLists([[], [], []])).toEqual([]);
  // });

  it('should work with no linked lists', () => {
    expect(mergeKLists([])).toEqual(null);
  });

  it('should work with one linked list with a singular null node', () => {
    expect(mergeKLists([null])).toEqual(null);
  });

  it('should work on one linked list with one node', () => {
    a1 = new ListNode(1);
    lists = [a1];
    expect(mergeKLists(lists)).toEqual(new ListNode(1));
  });

  it('should merge multiple sorted arrays', () => {
    a1 = new ListNode(1);
    a2 = new ListNode(4);
    a3 = new ListNode(5);
    a1.next = a2;
    a2.next = a3;

    b1 = new ListNode(1);
    b2 = new ListNode(3);
    b3 = new ListNode(4);
    b1.next = b2;
    b2.next = b3;

    c1 = new ListNode(2);
    c2 = new ListNode(6);
    c1.next = c2;

    let lists = [a1, b1, c1];
    ans = new ListNode(1);
    ans.next = new ListNode(1);
    ans.next.next = new ListNode(2);
    ans.next.next.next = new ListNode(3);
    ans.next.next.next.next = new ListNode(4);
    ans.next.next.next.next.next = new ListNode(4);
    ans.next.next.next.next.next.next = new ListNode(5);
    ans.next.next.next.next.next.next.next = new ListNode(6);
    expect(mergeKLists(lists)).toEqual(ans);
  });
});
