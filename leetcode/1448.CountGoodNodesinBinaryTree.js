/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = function (root) {
  let numGood = 0;
  const dfs = (node, max = -Infinity) => {
    if (!node) return;
    if (node.val >= root.val && node.val >= max) {
      max = node.val;
      numGood++;
    }
    dfs(node.left, max);
    dfs(node.right, max);
  };
  dfs(root);
  return numGood;
};
