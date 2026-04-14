class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 3) return n;
        let dp = [1, 2];
        let i = 2;
        while (i < n) {
            const next = dp[0] + dp[1];
            dp[0] = dp[1];
            dp[1] = next;
            i++;
        }
        return dp[1];
    }
}
