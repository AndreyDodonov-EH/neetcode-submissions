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
    findInRange(A, l, r, val) {
        for (let i=l;i<r;i++) {
            if (A[i] === val) return i;
        }
        return -1;
    }

    traverse(P, I, p_l, p_r, i_l, i_r, parent, left) {
        if (p_r <= p_l) return;
        const val = P[p_l];
        const newNode = new TreeNode(val);
        if (left) parent.left = newNode; 
        else parent.right = newNode;
        const i_m = this.findInRange(I, i_l, i_r, val);
        const left_size = (i_m - i_l);
        this.traverse(P, I,
            p_l+1, p_l+1+left_size,
            i_l, i_m, newNode,
            true);
        this.traverse(P, I,
            p_l+1+left_size, p_r,
            i_m+1, i_r, newNode,
            false);
    }
    /**
     * @param {number[]} P - preorder
     * @param {number[]} I - inorder
     * @return {TreeNode}
     */
    buildTree(P, I) {
        const dummy = new TreeNode(42);
        this.traverse(P, I, 0, P.length, 0, I.length, dummy, true);
        return dummy.left;
    }
}
