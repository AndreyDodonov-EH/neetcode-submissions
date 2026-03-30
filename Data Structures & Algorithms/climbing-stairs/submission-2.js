class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n==1) return 1;
        let a=1;
        let b=2;
        for(let i=3;i<=n;i++) {
            const tmp = b;
            b = a+b;
            a = tmp;
        }
        return b;
    }
}
