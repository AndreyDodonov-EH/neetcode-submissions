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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true;
        if (p && !q || !p && q) return false;
        const leftSame = this.isSameTree(p.left, q.left);
        if (!leftSame) return false;
        const same = (p?.val === q?.val);
        if (!same) return false;
        return this.isSameTree(p.right, q.right); 
    }
}
