class Solution {
    /**
     * @param {number[]} P
     * @return {number}
     */
    maxProfit(P) {
        // for each element find next biggest
        let profit = 0;
        for (let i=0;i<P.length;i++) {
            for (let j=i;j<P.length;j++) {
                profit = Math.max(profit, P[j]-P[i]);
            }
        }
        return profit;
    }
}
