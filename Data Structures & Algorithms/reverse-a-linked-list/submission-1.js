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
        let prev = null;
        let crt = head;
        while (crt !== null) {
            const futureNext = crt.next;
            crt.next = prev;
            prev = crt;
            crt = futureNext;
        }
        return prev;
    }
}
