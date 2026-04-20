class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let crtSum = 0;
        let maxSum = nums[0];
        for (const n of nums) {
            crtSum = Math.max(crtSum, 0) + n;
            maxSum = Math.max(maxSum, crtSum);
        }
        return maxSum;
    }
}
