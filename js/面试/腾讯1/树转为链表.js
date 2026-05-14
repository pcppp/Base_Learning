function expandTree(root) {
  // 当根节点不为空时，持续循环
  while (root !== null) {
    // 如果当前节点有左子树，我们需要处理它
    if (root.left !== null) {
      // 1. 寻找左子树中的“最右节点”
      // 这个节点是先序遍历中，左子树的最后一个节点
      let predecessor = root.left;
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }

      // 2. 将当前节点的右子树，接到“最右节点”的右边
      // 这样保证了先序遍历的顺序：... -> 左子树 -> 右子树
      predecessor.right = root.right;

      // 3. 将当前节点的左子树，整个移动到右子树的位置
      root.right = root.left;

      // 4. 将左子树置空，符合链表结构
      root.left = null;
    }
    // 5. 移动到下一个节点（即当前的右子节点），继续处理
    root = root.right;
  }
}
