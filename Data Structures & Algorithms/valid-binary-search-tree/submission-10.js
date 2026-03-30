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
        // inorder explicit stack
        if (!root) return true;
        let prev = -Infinity;
        let stack = [];
        while(stack.length > 0 || root) {
            while(root) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            if (root.val <= prev) { return false; }
            prev = root.val;
            root = root.right;
        }
        return true;
    }
}
