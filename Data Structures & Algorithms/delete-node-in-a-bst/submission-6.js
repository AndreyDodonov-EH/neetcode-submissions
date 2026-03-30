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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        let parent = null;
        let cur = root;
        while (cur && cur.val !== key) {
            parent = cur;
            cur = (cur.val < key) ? cur.right : cur.left;
        }
        if (!cur) return root;
        if (!cur.left || !cur.right) {
            if (!parent) return cur.left || cur.right;
            if (cur === parent.left) {
                parent.left = cur.left || cur.right
            } else {
                parent.right = cur.left || cur.right;
            }
            return root;
        }
        let min = cur.right;
        let minParent = cur;
        while (min.left) {
            parent = min;
            min = min.left;
        }
        this.deleteNode(cur, min.val);
        cur.val = min.val;
        return root;
    }
}
