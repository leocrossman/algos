/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
  if (!head || !head.next) return null;
  let slow, fast, isFirstIntersection;
  fast = slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      isFirstIntersection = true;
      break;
    }
  }
  if (isFirstIntersection) {
    while (head !== slow) {
      head = head.next;
      slow = slow.next;
    }
    return head;
  }
  return null;
};
