class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const height = matrix.length;
        const width = matrix[0].length;
        let l=0;
        let r=height*width;
        while (l<r) {
            const m = l+Math.floor((r-l)/2);
            const i = Math.floor(m/width);
            const j = m%width;
            if (target < matrix[i][j]) {
                r = m;
            } else if (matrix[i][j] < target) {
                l = m+1;
            } else {
                return true;
            }
        }
        return false;
    }
}
