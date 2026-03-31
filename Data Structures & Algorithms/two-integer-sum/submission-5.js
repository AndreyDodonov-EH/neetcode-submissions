class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // map of values to indexes of available compliments
        const compliments = new Map();
        for (let i=0;i<nums.length;i++) {
            const expectedCompliment = target - nums[i];
            const complimentIdx = compliments.get(expectedCompliment);
            if (complimentIdx !== undefined) {
                return [i, complimentIdx];
            }
            // add current to available compliments
            compliments.set(nums[i], i);
        }
    }
}
