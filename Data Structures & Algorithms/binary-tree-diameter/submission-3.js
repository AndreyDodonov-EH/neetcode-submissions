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
    constructor () {
        this.diameter = 0;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    height(root) {
        if (!root) return 0;
        const left_height = root.left ? (1 + this.height(root.left)) : 0;
        const right_height = root.right ? (1 + this.height(root.right)) : 0;
        this.diameter = Math.max(this.diameter, left_height + right_height);
        return Math.max(left_height, right_height);
    }
    diameterOfBinaryTree(root) {
        this.height(root);
        return this.diameter;
    }
}
