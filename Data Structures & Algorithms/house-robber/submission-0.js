class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let max0 = 0;
        let max1 = 0;
        for (let i=0;i<nums.length;i++) {
            const curMax = Math.max(nums[i] + max0, max1);
            max0 = max1;
            max1 = curMax;
        }
        return max1;
    }
}
