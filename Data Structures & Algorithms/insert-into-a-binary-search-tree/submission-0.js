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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if (!root) {
            return new TreeNode(val);
        }
        let cur = root;
        let prev = null;
        let left = false;
        while(cur) {
            prev = cur;
            if (cur.val < val) {
                cur = cur.right;
                left = false;
            } else {
                cur = cur.left;
                left = true;
            }
        }
        if (left) {
            prev.left = new TreeNode(val);
        } else {
            prev.right = new TreeNode(val);
        }
        return root;
    }
}

