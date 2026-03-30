class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subs = [];
        let crt = [];
        function traverse(idx) {
            if (idx === nums.length) {
                subs.push([...crt]);
                return;
            }
            crt.push(nums[idx]);
            traverse(idx+1);
            crt.pop();
            traverse(idx+1);
        }
        traverse(0);
        return subs;
    }
}
