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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    merge(a,b) {
        const dummy = new ListNode(42, null);
        let cur = dummy;
        while (a && b) {
            if (a.val <= b.val) {
                cur.next = a;
                a = a.next;
            } else {
                cur.next = b;
                b = b.next;
            }
            cur = cur.next;
        }
        if (a) {
            cur.next = a;
        }
        if (b) {
            cur.next = b;
        }
        cur = cur.next;
        return dummy.next;
    }

    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }
        let res = lists[0];
        for (let i=1;i<lists.length;i++) {
            res = this.merge(res, lists[i]);
        }
        return res;
    }
}
