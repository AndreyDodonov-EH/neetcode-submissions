/**
 * // Definition for a _Node.
 * class _Node {
 *     constructor(val, left, right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {_Node} root
     * @return {_Node}
     */
    treeToDoublyList(root) {
        if (!root) return null;
        let smallest = null;
        let largest = null;
        function dfs(root) {
            if (!root) return null;
            dfs(root.left);
            if (!smallest) smallest = root;
            if (largest) {
                largest.right = root;
                root.left = largest;
            }
            largest = root;
            dfs(root.right);
        }
        dfs(root);
        largest.right = smallest;
        smallest.left = largest;
        return smallest;
    }
}
