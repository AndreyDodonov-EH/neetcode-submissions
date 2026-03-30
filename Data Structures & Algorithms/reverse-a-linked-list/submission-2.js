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
        // covers edge case of empty list
        if (head === null) {
            return head;
        }
        // recursion base case when we reach the end
        if (head.next === null) {
            return head;
        }
        const newHead = this.reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}
