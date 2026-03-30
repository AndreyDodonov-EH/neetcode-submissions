class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        nums.sort((a,b)=>(b-a));
        nums.length = Math.min(nums.length, k);
        this.q = new MinPriorityQueue();
        for (const n of nums) this.q.push(n);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.q.push(val);
        if (this.q.size() < this.k) {
            return null;
        }
        if (this.q.size() > this.k) {
            this.q.pop();
        }
        return this.q.front();
    }
}
