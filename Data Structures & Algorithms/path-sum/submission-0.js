/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if (!root) return false;
        targetSum -= root.val;
        if (!root.left && !root.right) {
            return (0 === targetSum);
        }
        return this.hasPathSum(root.left, targetSum) || this.hasPathSum(root.right, targetSum);
    }
}
