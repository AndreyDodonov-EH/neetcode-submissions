class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const max = 2;
        const min = 0;
        let ps = new Uint16Array(max-min+1);
        for (let i=0;i<nums.length;i++) {
            const num = nums[i];
            for (let j=max;j>=num;j--)
                nums[ps[j]++] = j;
        }
    }
}
