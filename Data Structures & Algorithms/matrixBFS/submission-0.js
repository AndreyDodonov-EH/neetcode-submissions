class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const q/*: [r,c]*/ = new Queue();
        q.push([0,0]);
        let len = 0;
        while (q.size() > 0) {
            const size = q.size();
            for (let i=0;i<size;i++) {
                const [r,c] = q.pop();
                if (r<0 || c<0 || r===ROWS || c===COLS) continue;
                if (1 === grid[r][c]) continue;
                if ((r===(ROWS-1)) && (c===(COLS-1))) return len;
                grid[r][c] = 1;
                q.push([r+1,c]);
                q.push([r-1,c]);
                q.push([r,c+1]);
                q.push([r,c-1]);
            }
            len++;
        }
        return -1;
    }
}
