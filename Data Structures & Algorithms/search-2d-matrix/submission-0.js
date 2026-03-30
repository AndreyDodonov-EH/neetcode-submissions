class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    isInRow(row, target) {
        let l=0;
        let r=row.length;
        while(l<r) {
            const m = l+Math.floor((r-l)/2);
            if (target < row[m]) {
                r = m;
            } else if (row[m] < target) {
                l = m+1;
            } else {
                return true;
            }
        }
        return false;
    }

    searchMatrix(matrix, target) {
        const width = matrix[0].length;
        let t=0;
        let b=matrix.length;
        while(t<b) {
            const m = t+Math.floor((b-t)/2);
            if (target < matrix[m][0]) {
                b = m;
            } else if (matrix[m][width-1] < target) {
                t = m+1;
            } else {
                return this.isInRow(matrix[m], target);
            }
        }    
        return false;
    }
}
