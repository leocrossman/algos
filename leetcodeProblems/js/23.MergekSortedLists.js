function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * O(n * m) time where n is the length of the longest linked List and m is the number of Linked Lists
 * O(1) space because we do not create a new linked list. Instead we work in place on the existing nodes.
 * More explicitly, we create a fixed number of pointers in all cases regardless of input size
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */
const mergeKLists = (lists) => {
  let head; // head to return at end
  let curr; // current node in our linked list we are building
  let min = -Infinity; // min node value to use across helpers
  let next; // next node pointer

  /**
   * Helper to recursively add the nodes with the minimum val to the end of our linked list
   * @param {ListNode[]} nodes
   * @returns {void}
   */
  function addMinNodesToHead(nodes) {
    // base case: proceed if at least one node is not null
    if (allNodesNull(nodes)) return;
    // get min value of all current nodes
    min = getMinValOfNodes(nodes);
    for (const idx in nodes) {
      // if any current node is null, skip iteration to nullify the rest.
      if (nodes[idx] === null) continue;
      else if (min === nodes[idx].val) {
        // assign next to the current node and point from there so we don't have to create a new node.
        next = nodes[idx];
        // if we have not initialized our head, do it here
        if (head === undefined) curr = head = next;
        // MUST check to make this condition so we dont create a cycle for Linked Lists of length 1 with only one Linked List
        else if (curr !== next) {
          // point our linked list to the next/new val/node
          curr.next = next;
          // move curr to the last node
          curr = curr.next;
        }
        // iterate to the next node of the current linked list
        nodes[idx] = nodes[idx].next;
      }
    }
    addMinNodesToHead(nodes); // recursive call to add the next nodes/values
  }

  addMinNodesToHead(lists); // do everything!
  return head || null; // return our head or null if no linked lists were provided or if a singular linked list with one null node was provided
};

/**
 * helper to return false if any linked lists have a current node that is not null
 * O(n) time and O(1) space
 * @param {ListNode[]} nodes
 * @returns {Boolean}
 */
function allNodesNull(nodes) {
  for (const node of nodes) {
    if (node) return false;
  }
  return true;
}

/**
 * helper to return the min value of any of the nodes currently being processed
 * O(n) time and O(1) space
 * @param {ListNode[]} nodes
 * @returns {Number}
 */
function getMinValOfNodes(nodes) {
  let min = Infinity;
  for (const node of nodes) {
    if (node) min = Math.min(min, node.val);
  }
  return min;
}

let a1 = new ListNode(1);
let a2 = new ListNode(4);
let a3 = new ListNode(5);
a1.next = a2;
a2.next = a3;

let b1 = new ListNode(1);
let b2 = new ListNode(3);
let b3 = new ListNode(4);
b1.next = b2;
b2.next = b3;

// let c1 = new ListNode(1);
let c1 = new ListNode(2);
let c2 = new ListNode(6);
c1.next = c2;

let lists = [a1, b1, c1];
// console.log(mergeKLists(lists));
// console.log(mergeKLists([]));

module.exports = mergeKLists;
