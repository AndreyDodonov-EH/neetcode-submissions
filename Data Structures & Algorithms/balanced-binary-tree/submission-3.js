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
        function dfs(root) {
            if (!root) return [true, 0];
            let [leftBalanced, leftHeight] = dfs(root.left);
            if (!leftBalanced) return [false, 0];
            leftHeight++;
            let [rightBalanced,rightHeight] = dfs(root.right);
            if (!rightBalanced) return [false, 0];
            rightHeight++;
            const balanced = Math.abs(leftHeight-rightHeight) <= 1;
            if (!balanced) return [false, 0];
            return [true, Math.max(leftHeight, rightHeight)];
        }
        return dfs(root)[0];
    }
}
