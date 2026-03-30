class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let ps = new Uint16Array(2-0+1);
        for (const num of nums)
            for (let i=2;i>=num;i--)
                nums[ps[i]++] = i;
    }
}
