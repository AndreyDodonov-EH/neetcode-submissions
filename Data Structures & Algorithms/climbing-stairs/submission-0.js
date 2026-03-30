class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n,a=1,b=2) {
        return (n==1) ? a : this.climbStairs(n-1,b,a+b);
    }
}
