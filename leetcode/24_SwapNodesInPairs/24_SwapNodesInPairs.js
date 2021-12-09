function LinkedList() {
  this.head = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

LinkedList.prototype.addToTail = function (val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
  } else {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
};

/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
*/
/*

[1,2] -> [2, 1]
[1,.next=4] [2,.next=1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  if (!head) return null; // if no head return null
  if (!head.next) return head; // if only one node, return it
  const finalHead = head.next;
  // recursive helper
  const swap = (node, next) => {
    // if no next, set node next to null and we are done
    if (!next) node.next = null;
    // if there is a pair...
    else {
      let newNext, newStart;
      // if there is at least one more node after the current pair
      if (next.next) {
        newStart = next.next; // start next call to swap at the node after the current pair
        // if there is at least a full pair (2 nodes) after the current pair
        if (next.next.next) {
          node.next = next.next.next; // point "across pairs"
          next.next = node; // point 2nd in pair to 1st
        } else {
          node.next = newStart; // point "across pairs"
          next.next = node; // point 1st in pair to 2nd
        }
        swap(newStart, newStart.next); // recursive call to swap next pair
      } else {
        // if there are no nodes after the current pair...
        next.next = node; // point 2nd in pair to 1st
        node.next = null; // point 1st in pair to null since we are done
      }
    }
  };

  swap(head, head.next); // begin swapping pairs
  return finalHead;
};

const ll = new LinkedList();
ll.addToTail(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(4);
ll.addToTail(5);
ll.addToTail(6);
let swapped = swapPairs(ll.head);
console.log(swapped);
// console.log(swapPairs([1, 2, 3, 4])); // [2,1,4,3]
// console.log(swapPairs([])); // []
// console.log(swapPairs([1])); // [1]
