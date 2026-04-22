class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // rolling windows of size K
        const window = new Set();
        for (let i=0;i<nums.length;i++) {
            if (window.size === k+1) {
                window.delete(nums[i-(k+1)]);
            }
            if (window.has(nums[i])) return true;
            window.add(nums[i]);
        }
        return false;
    }
}
