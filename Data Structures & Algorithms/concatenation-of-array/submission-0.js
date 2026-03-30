class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const t = 2;
        let ans = new Array(t*nums.length);
        for (let i=0;i<t;i++) {
            const start = i*nums.length;
            const end = start+nums.length;
            for (let j=start;j<end;j++) {
                ans[j] = nums[j-start];
            }
        }
        return ans;
    }
}
