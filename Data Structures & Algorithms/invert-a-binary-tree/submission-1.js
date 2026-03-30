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
     * @return {TreeNode}
     */
    invertTree(root) {
        // bfs reverse
        let ans = null;
        let q = new Queue();
        if (root) {q.push(root); ans = root;}
        while(!q.isEmpty()) {
            const len = q.size();
            for (let i=0;i<len;i++) {
                const el = q.pop();
                if (el.right) {q.push(el.right);}
                if (el.left) {q.push(el.left);}
                const tmp = el.right;
                el.right = el.left;
                el.left = tmp;
            }
        }
        return ans;
    }
}
