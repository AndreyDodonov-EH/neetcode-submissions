class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // use two pointers
        // l = 0, r = 1; if r is smaller, than l becomes r - we better buy on this day
        // otheriswe we check if current profit of selling on this day is best
        // then we move move onto the next day for potential buying/selling
        let l = 0;
        let r = 1;
        let profit = 0;
        while(r < prices.length) {
            const crtProfit = prices[r] - prices[l];
            if (crtProfit < 0) {
                l = r;
            } else if (crtProfit > profit) {
                profit = crtProfit;
            }
            r++;
        }
        return profit;
    }
}
