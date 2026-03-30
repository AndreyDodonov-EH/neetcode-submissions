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
        const q = []
        const res = [];
        if (root) q.push(root);
        while (q.length > 0) {
            const levelLen = q.length;
            const level = [];
            for (let i=0;i<levelLen;i++) {
                const el = q.shift();
                level.push(el.val);
                if (el.left) q.push(el.left);
                if (el.right) q.push(el.right);
            }
            res.push(level);
        }
        return res;
    }
}
