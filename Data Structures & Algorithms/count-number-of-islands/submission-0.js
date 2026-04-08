class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        function flood(r,c) {
            if (r<0 || c<0 || r==ROWS || c==COLS) return;
            if ('0' == grid[r][c]) return;
            grid[r][c] = '0';
            flood(r+1,c);
            flood(r-1,c);
            flood(r,c+1);
            flood(r,c-1);
        }
        let cnt = 0;
        for (let r=0;r<ROWS;r++) {
            for (let c=0;c<COLS;c++) {
                if ('0' == grid[r][c]) continue;
                flood(r,c);
                cnt++;
            }
        }
        return cnt;
    }
}
