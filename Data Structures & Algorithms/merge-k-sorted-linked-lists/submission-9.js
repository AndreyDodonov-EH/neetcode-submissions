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
        return dummy.next;
    }

    mergeKLists(lists, l=0, r=lists.length) {
        if (lists.length === 0) {
            return null;
        }
        if (r-l<=1) return;
        // separate into 2 lists
        const m = l+Math.floor((r-l)/2);
        this.mergeKLists(lists, l, m);
        this.mergeKLists(lists, m, r);
        lists[l] = this.merge(lists[l],lists[m]);
        return lists[0];
    }
}
