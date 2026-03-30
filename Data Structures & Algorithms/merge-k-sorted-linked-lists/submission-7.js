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

    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }
        let size = 1;
        while (size < lists.length) {
            for (let i=0;i+size<lists.length;i+=2*size) {
                lists[i] = this.merge(lists[i], lists[i+size]);
            }
            size*=2;
        }
        return lists[0];
    }
}
