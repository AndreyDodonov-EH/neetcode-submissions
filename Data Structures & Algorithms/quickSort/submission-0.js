/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    swap(A,i,j) {
        const tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
    }

    partitionLomuto(A,l,r) {
        const pivotIdx = r-1;
        const pivotVal = A[pivotIdx].key;
        let firstBiggerOrEqual = l;
        for (let i=l;i<pivotIdx;i++) {
            if (A[i].key < pivotVal) { 
                this.swap(A, firstBiggerOrEqual++, i)
            }
        }
        this.swap(A, pivotIdx, firstBiggerOrEqual);
        return firstBiggerOrEqual;
    }

    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(A, l=0, r=A.length) {
        // 0. return if rightmost is less than leftmost
        if (r-l<=1) return A;
        // 1. partition lomuto
        const pivotIdx = this.partitionLomuto(A,l,r);
        // 2. call for the left part
        this.quickSort(A,l,pivotIdx);
        // 3. call for the right part
        this.quickSort(A,pivotIdx+1,r);
        return A;
    }
}
