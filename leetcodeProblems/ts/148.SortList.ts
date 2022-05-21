import { Node } from '../../util/DataStructures/SinglyLinkedList';
/* Given the head of a linked list, return the list after sorting it in ascending order. */

export const sortList = (head?: Node | null): Node | null => {
  if (!head) return null;
  head = mergeSort(head);
  return head;
};

export const mergeSort = (head: Node | null): Node | null => {
  if (head && !head.next) return head;
  const mid: Node | null = getMid(head);
  const left: Node | null = mergeSort(head);
  const right: Node | null = mergeSort(mid);
  return merge(left, right);
};

export const merge = (left: Node | null, right: Node | null): Node | null => {
  let curr: Node | null = getMinNode(left, right);
  const head: Node | null = curr;
  if (curr === right) [left, right] = [right, left];
  // start with head === smaller of left and right (left) WLOG
  while (left && right) {
    left.val < right.val ? (left = left.next) : (right = right.next);
    if (curr) {
      curr.next = getMinNode(left, right);
      curr = curr.next;
    }
  }
  if (left && curr) curr.next = left;
  if (right && curr) curr.next = right;
  return head;
};

export const getMinNode = (
  left: Node | null,
  right: Node | null
): Node | null =>
  Math.min(left?.val ?? Infinity, right?.val ?? Infinity) === left?.val
    ? left
    : right;

export const getMid = (head: Node | null): Node | null => {
  let midPrev: Node | null = null;
  while (head?.next) {
    midPrev = midPrev === null ? head : midPrev.next;
    head = head.next.next;
  }
  const mid: Node | null = midPrev === null ? midPrev : midPrev.next;
  if (midPrev) midPrev.next = null;
  return mid;
};

console.clear();
const a = new Node(4);
const b = new Node(2);
const c = new Node(1);
const d = new Node(3);
a.next = b;
b.next = c;
c.next = d;

console.log(sortList(a));
