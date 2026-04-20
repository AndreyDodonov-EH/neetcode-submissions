class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        // idea: Kadane + Max(largestSum, (totalSum - smallestSum))
        let largestSum = nums[0];
        let smallestSum = nums[0];
        let totalSum = 0;
        let crtLargestSum = 0;
        let crtSmallestSum = 0;
        for (const n of nums) {
            crtLargestSum = Math.max(crtLargestSum, 0) + n;
            largestSum = Math.max(largestSum, crtLargestSum);
            crtSmallestSum = Math.min(crtSmallestSum, 0) + n;
            smallestSum = Math.min(smallestSum, crtSmallestSum);
            totalSum += n;
        }
        if (totalSum === smallestSum) return largestSum;
        return Math.max(largestSum, (totalSum - smallestSum));
    }
}
