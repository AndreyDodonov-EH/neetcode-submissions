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
        const origQ = new Queue();
        const copiesArr = new Array(101).fill(null); // array of copies (since it's small)
        origQ.push(node);
        copiesArr[node.val] = new Node(node.val, new Array(node.neighbors.length));
        while (origQ.size() > 0) {
            const crt = origQ.pop();
            const copied = copiesArr[crt.val]; // we prepoluate copiesArr, so it never returns null here
            for (let i=0;i<crt.neighbors.length;i++) {
                const nb = crt.neighbors[i];
                if (!copiesArr[nb.val]) {
                    copiesArr[nb.val] = new Node(nb.val, new Array(nb.neighbors.length));
                    origQ.push(nb);
                }
                copied.neighbors[i] = copiesArr[nb.val];
            }
        }
        return copiesArr[node.val];
    }
}
