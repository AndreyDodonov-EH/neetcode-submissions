class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let counts = new Uint16Array(2-0+1);
        for (const num of nums) {
            counts[num]++;
        }
        let s=0;
        for (let i=0;i<counts.length;i++) {
            const e = s+counts[i];
            nums.fill(i,s,e);
            s=e;
        }
    }
}
