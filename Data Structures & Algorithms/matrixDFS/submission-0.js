class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        // dfs + backtracking
        const ROWS = grid.length;
        const COLS = grid[0].length;
        function dfs(r, c) {
            if (r<0 || c<0) return 0;
            if (r>=ROWS || c>=COLS) return 0;
            if (1 === grid[r][c]) return 0;
            if ((r === (ROWS-1)) && (c === (COLS-1))) return 1;
            grid[r][c] = 1;
            let cnt = 0;
            cnt += dfs(r+1,c);
            cnt += dfs(r-1,c);
            cnt += dfs(r,c+1);
            cnt += dfs(r,c-1);
            grid[r][c] = 0;
            return cnt;
        }
        return dfs(0,0);
    }
}
