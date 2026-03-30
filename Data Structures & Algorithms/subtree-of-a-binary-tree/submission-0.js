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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function same(r, s) {
            if (!r && !s) return true;
            if (r && !s || !r && s) return false;
            if (r.val !== s.val) return false;
            return same(r.left, s.left) && same(r.right, s.right);
        }

        function find(r) {
            if (!r) return false;
            if (r.val === subRoot.val)  {
                if (same(r, subRoot)) return true;
            }    
            return find(r.left) || find(r.right);
        }

        return find(root);
    }
}
