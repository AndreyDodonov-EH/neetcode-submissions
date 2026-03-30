class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const q = new MaxPriorityQueue();
        for (const s of stones) q.push(s);
        while (q.size() > 1) {
            const x = q.pop();
            const y = q.pop();
            if (x !== y) {
                q.push(Math.abs(y-x));
            }
        }
        return (q.size() > 0) ? q.pop() : 0;
    }
}
