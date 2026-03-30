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
    constructor() {
        this.res = [];
    }
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root) {
        if (!root) return this.res;
        this.postorderTraversal(root.left);
        this.postorderTraversal(root.right);
        this.res.push(root.val);
        return this.res;
    }
}
