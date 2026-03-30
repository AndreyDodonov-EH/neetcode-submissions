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
     * @param {number} k
     * @return {number}
     */
    constructor() {
        this.i=1;
    }
    kthSmallest(root, k) {
        if (!root) {
            return null;
        }
        let val = this.kthSmallest(root.left, k);
        if (val !== null) {
            return val;
        }
        if (this.i === k) {
            return root.val;
        }
        this.i++;
        val = this.kthSmallest(root.right, k);
        return val;
    }
}
