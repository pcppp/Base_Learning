/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, sum) {
  // 1. 基本情况：如果根节点为空，直接返回 false
  if (!root) {
    return false;
  }

  // 2. 检查是否到达叶子节点，并判断路径和是否等于目标和
  // 剩余的目标和为 sum - root.val
  const remainingSum = sum - root.val;

  // 当前节点是叶子节点 (left和right都为空)
  if (!root.left && !root.right) {
    // 如果剩余的目标和为 0，说明路径和正好等于目标 sum
    return remainingSum === 0;
  }

  // 3. 递归搜索：如果不是叶子节点，继续搜索左子树和右子树

  // 只要左子树或右子树中有一条路径满足条件，就返回 true
  const leftPath = hasPathSum(root.left, remainingSum);
  const rightPath = hasPathSum(root.right, remainingSum);

  return leftPath || rightPath;
}

// -----------------------------------------------------------------
// 示例运行（构建题目中的二叉树）
// sum = 22

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const tree = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(1), new TreeNode(11, new TreeNode(2), new TreeNode(7))),
  new TreeNode(
    8,
    null, // 8 的左子节点缺失
    new TreeNode(9)
  )
);

const targetSum = 22;
const result = hasPathSum(tree, targetSum);

console.log(`目标和为 ${targetSum} 的路径是否存在: ${result}`); // 输出: true
