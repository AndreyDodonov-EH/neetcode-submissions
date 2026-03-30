class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const max = 2;
        const min = 0;
        let ps = new Uint16Array(max-min+1);
        for (const num of nums)
            for (let i=max;i>=num;i--)
                nums[ps[i]++] = i;
    }
}
