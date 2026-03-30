class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((a,b)=>(a-b));
        while (stones.length > 1) {
            const x = stones[stones.length-1];
            const y = stones[stones.length-2];
            stones.pop();
            stones.pop();
            if (x !== y) {
                stones.push(Math.abs(x - y));
                stones.sort((a,b)=>(a-b));
            }
        }
        return (stones.length > 0) ? stones[0] : 0;
    }
}
