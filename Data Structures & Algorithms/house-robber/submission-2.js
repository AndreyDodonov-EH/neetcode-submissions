class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Int16Array(nums.length+1).fill(-1);
        function go(pos) {
            if (pos>=nums.length) return 0;
            if (cache[pos] === -1)
                cache[pos] = nums[pos] + Math.max(go(pos+2),go(pos+3));
            return cache[pos];
        }
        return Math.max(go(0),go(1));
    }
}
