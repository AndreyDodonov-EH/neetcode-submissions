class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const n = grid.length;
        // perform BFS
        const q = new Queue();
        q.push([0,0]);
        let len=0;
        while(q.size() > 0) {
            len++;
            const size = q.size();
            for (let i=0;i<size;i++) {
                const [r,c] = q.pop();
                if (r<0 || c<0 || r>=n || c>=n) continue;
                if (1 === grid[r][c]) continue;
                if (r===n-1 && c===n-1) return len;
                grid[r][c] = 1;
                const dirs = [[-1,-1],[-1,0],[-1,1],
                              [ 0,-1],       [ 0,1],
                              [ 1,-1],[ 1,0],[ 1,1]];
                for (const dir of dirs) {
                    q.push([r+dir[0],c+dir[1]]);                    
                }
            }
        } 
        return -1;
    }
}
