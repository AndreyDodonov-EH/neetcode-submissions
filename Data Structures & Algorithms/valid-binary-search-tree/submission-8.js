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
        // range explicit stack
        if (!root) return true;
        const stack = [];
        stack.push([root, -Infinity, Infinity]);
        while (stack.length > 0) {
            const [root, min, max] = stack.pop();
            if (!root) continue;
            if (root.val <= min || root.val >= max) return false;
            stack.push([root.left, min, root.val]);
            stack.push([root.right, root.val, max]);
        }
        return true;
    }
}
