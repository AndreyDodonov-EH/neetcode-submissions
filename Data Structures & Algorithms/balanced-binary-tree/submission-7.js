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
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true;
        function dfs(root) {
            if (!root) return 0;
            const leftHeight = 1 + dfs(root.left);
            const rightHeight = 1 + dfs(root.right);
            balanced = balanced ? (Math.abs(rightHeight - leftHeight) <= 1) : false;
            return Math.max(leftHeight, rightHeight);
        }
        dfs(root);
        return balanced;
    }
}
