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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        function traverse(root, level) {
            if (!root) return;
            if (res.length === level) {
                res.push(new Array());
            }
            res[level].push(root.val);
            traverse(root.left, level + 1);
            traverse(root.right, level + 1)
        }
        traverse(root, 0);
        return res;
    }
}
