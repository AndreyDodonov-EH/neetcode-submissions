class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    dist(p) {
        return p[0]*p[0] + p[1]*p[1]
    }

    kClosest(points, k) {
        const q = new PriorityQueue((a,b) => {
            return (this.dist(a) < this.dist(b)) ? -1 : 1;
        });
        for (const p of points) {
            q.push(p);
        }
        const res = [];
        for (let i=0;i<k;i++) {
            res.push(q.pop());
        }
        return res;
    }
}
