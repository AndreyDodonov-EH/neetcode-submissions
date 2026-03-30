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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = [];
        const q = new Queue();
        if (root) q.push(root);
        while (!q.isEmpty()) {
            const levelLen = q.size();
            for (let i=0;i<levelLen;i++) {
                const el = q.pop();
                if (levelLen-1 === i) {
                    res.push(el.val);
                }
                if (el.left) q.push(el.left);
                if (el.right) q.push(el.right);
            }
        }
        return res;
    }
}
