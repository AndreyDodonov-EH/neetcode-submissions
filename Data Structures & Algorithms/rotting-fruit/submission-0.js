class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
        // save those neighbouring rottens and count freshes;
        const q = new Queue();
        let freshCnt = 0;
        for (let r=0;r<ROWS;r++)
            for (let c=0;c<COLS;c++) 
                if (1===grid[r][c]) freshCnt++;
                else if (2===grid[r][c]) 
                    for (const dir of dirs)
                        q.push([r+dir[0],c+dir[1]]);
        if (0 === freshCnt) return 0;
        let minutes = 0;
        while (q.size()>0) {
            minutes++;
            const size = q.size();
            for (let i=0;i<size;i++) {
                const [r,c] = q.pop();
                if (r<0 || c<0 || r>=ROWS || c>=COLS) continue;
                if (1 !== grid[r][c]) continue;
                grid[r][c] = 2;
                freshCnt--;
                if (0 === freshCnt) return minutes;
                for (const dir of dirs) 
                    q.push([r+dir[0],c+dir[1]]);
            }
        }
        return -1;
    }
}
