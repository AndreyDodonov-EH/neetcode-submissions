class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        nums.sort((a,b) => (a-b));
        nums.push(-1);
        for (let i=nums.length-1;i>=0;i--) {
            while (nums[i] === nums[i-1]) i--;
            if (nums[i-1] !== nums[i-2]) return nums[i-1];
        }
        return -1;
    }
}
