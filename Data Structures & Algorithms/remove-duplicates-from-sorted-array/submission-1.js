class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
 removeDuplicates(nums) {
    let uniqueIdx=0;
    for (let i=1;i<nums.length;i++) {
        if (nums[i] !== nums[uniqueIdx]) {
            nums[++uniqueIdx] = nums[i];
        }
        console.log(nums);
    }
    return uniqueIdx+1;
}
}
