class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        function flood(r,c) {
            if (r<0 || c<0 || r>=ROWS || c>=COLS) return 0;
            if (0 === grid[r][c]) return 0;
            grid[r][c] = 0;
            let area = 1;
            let dirs=[[1,0],[-1,0],[0,1],[0,-1]];
            for (const dir of dirs)
                area += flood(r+dir[0],c+dir[1]);
            return area;
        }
        let maxArea = 0;
        for (let r=0;r<ROWS;r++) {
            for (let c=0;c<COLS;c++) {
                maxArea = Math.max(maxArea,flood(r,c));
            }
        }
        return maxArea;
    }
}
