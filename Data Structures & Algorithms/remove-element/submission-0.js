class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i=0;
        let k=nums.length;
        while(i<k) {
            if (nums[i] === val) {
                k--;
                [nums[i],nums[k]] = [nums[k],nums[i]];
            } else {
                i++;
            }
        }
        return k;
    }
}
