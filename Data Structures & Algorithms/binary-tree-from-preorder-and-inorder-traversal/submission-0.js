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
    traverse(preorder, inorder, parent, left) {
        if (preorder.length === 0) return;
        const val = preorder[0];
        const newNode = new TreeNode(val);
        if (left) parent.left = newNode; 
        else parent.right = newNode;
        const m = inorder.indexOf(val);
        this.traverse(preorder.slice(1,1+m), inorder.slice(0,m), newNode, true);
        this.traverse(preorder.slice(1+m), inorder.slice(m+1), newNode, false);
    }
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
       const dummy = new TreeNode(42);
       this.traverse(preorder, inorder, dummy, true);
       return dummy.left;
    }
}
