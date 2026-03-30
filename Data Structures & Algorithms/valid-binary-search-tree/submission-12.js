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
        // inorder explicit stack no-null
        let stack = [];
        let prev = -Infinity;
        while (root) {
            stack.push(root);
            root = root.left;
        }
        while (stack.length > 0) {
            root = stack.pop();
            console.log(root.val);
            if (root.val <= prev) return false;
            prev = root.val;
            if (root.right) {
                root = root.right;
                while (root) {
                    stack.push(root)
                    root = root.left
                }
            }
        }
        return true;
    }
}
