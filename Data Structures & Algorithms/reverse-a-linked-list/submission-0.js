/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head == null) {
            return null;
        }
        let nodes = [];
        let cur = head;
        while (cur !== null) {
            nodes.push(cur);
            cur = cur.next;
        }
        for (let i = nodes.length-1;i>0;i--) {
            nodes[i].next = nodes[i-1];
        }
        nodes[0].next = null;
        return nodes[nodes.length-1];
    }
}
