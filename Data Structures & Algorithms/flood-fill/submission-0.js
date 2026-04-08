class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const oldColor = image[sr][sc];
        if (oldColor === color) return image;
        const ROWS = image.length;
        const COLS = image[0].length;
        function dfs(r, c) {
            if (r<0 || c<0) return;
            if (r>=ROWS || c>=COLS) return;
            if (image[r][c] !== oldColor) return;
            image[r][c] = color;
            dfs(r+1,c);
            dfs(r-1,c);
            dfs(r,c+1);
            dfs(r,c-1);
        }
        dfs(sr,sc);
        return image;
    }
}
