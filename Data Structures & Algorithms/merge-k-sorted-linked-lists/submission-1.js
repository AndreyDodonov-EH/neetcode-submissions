class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // Assume a built-in MinPriorityQueue that sorts by node.val
        const minHeap = new MinPriorityQueue((x) => x.val);
        const dummy = new ListNode(0);
        let curr = dummy;

        // 1. Initial Fill: Push the head of each list into the heap
        for (const head of lists) {
            if (head) {
                minHeap.enqueue(head);
            }
        }

        // 2. Process: Always pull the smallest node across all K lists
        while (!minHeap.isEmpty()) {
            const smallestNode = minHeap.dequeue();
            curr.next = smallestNode;
            curr = curr.next;

            // 3. If that node had a follower, add it to the "leaderboard"
            if (smallestNode.next) {
                minHeap.enqueue(smallestNode.next);
            }
        }

        return dummy.next;
    }
}