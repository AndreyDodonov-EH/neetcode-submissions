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
    isValidBST(root) {
        //inorder
        let prev = -Infinity;
        function dfs(root) {
            if (!root) return true;
            let ok = dfs(root.left);
            if (!ok) return false;
            ok = (root.val > prev);
            if (!ok) return false;
            prev = root.val;
            ok = dfs(root.right);
            return ok;
        }
        return dfs(root);
    }
}
