/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const copiesArr = new Array(101).fill(null);
        function build(crt) {
            if (copiesArr[crt.val]) return copiesArr[crt.val];
            const copied = new Node(crt.val, Array(crt.neighbors.length));
            copiesArr[crt.val] = copied;
            for (let i=0;i<crt.neighbors.length;i++)
                copied.neighbors[i] = build(crt.neighbors[i]);
            return copied;
        }
        return build(node);
    }
}
