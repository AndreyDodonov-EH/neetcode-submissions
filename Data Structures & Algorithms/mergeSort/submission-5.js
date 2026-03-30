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
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */

    merge(A, B, l, m, r) {
        let i=l;
        let j=m;
        let k=l;
        while (i<m && j<r) {
            B[k++] = (A[i].key <= A[j].key) ? A[i++] : A[j++];
        }
        while (i<m) {
            B[k++] = A[i++];
        }
        while (j<r) {
            B[k++] = A[j++];
        }
    }

    // ping-pong
    mergeSortBody(A, B, l, r) {
        if (r-l<=1) return B;
        const m = l + Math.floor((r-l)/2);
        this.mergeSortBody(B,A,l,m);
        this.mergeSortBody(B,A,m,r);
        this.merge(A, B, l, m, r);
        return B;
    }

    mergeSort(A) {
        let B = new Array(A.length);
        for (let i=0;i<A.length;i++) {
            B[i] = A[i];
        }
        const res = this.mergeSortBody(A,B,0,A.length);
        return res;
    }
}
