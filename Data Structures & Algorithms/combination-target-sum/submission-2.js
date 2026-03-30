class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        let cur = [];
        let total = 0;
        nums.sort((a,b) => (b-a))
        function dfs(i) {
            if (total > target || i >= nums.length) {
                return;
            }
            if (total === target) {
                res.push([...cur]);
                return;
            }
            cur.push(nums[i]);
            total += nums[i];
            dfs(i);
            cur.pop();
            total -= nums[i];
            dfs(i+1);
        }
        dfs(0);
        return res;
    }
}
