class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const q = new MaxPriorityQueue();
        for (const n of nums) q.push(n);
        for (let i=0;i<k-1;i++) q.pop();
        return q.pop();
    }
}
