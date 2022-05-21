/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  let LCA;
  const search = (node) => {
    if (!node) return node;
    const left = search(node.left);
    const right = search(node.right);
    const isOneFound = node === p || node === q;
    if (left + right + isOneFound >= 2) LCA = node;
    return isOneFound || left || right;
  };
  search(root);
  return LCA;
};
