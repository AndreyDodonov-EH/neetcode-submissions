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
    merge(src, dst, l, m, r) {
        let i = l;
        let j = m;
        let k = l;
        while (i<m && j<r) {
            dst[k++] = (src[i].key <= src[j].key) ? src[i++] : src[j++];
        }
        while (i<m) {
            dst[k++] = src[i++];
        }
        while (j<r) {
            dst[k++] = src[j++];
        }
    }
    mergesort_body(A, B, l, r) {
        const m = l + Math.floor((r-l)/2);
        if (m-l>1) this.mergesort_body(B, A, l, m);
        if (r-m>1) this.mergesort_body(B, A, m, r);
        this.merge(B, A, l, m, r);
    }
    mergeSort(A) {
        let B = new Array(A.length);
        for (let i=0;i<A.length;i++) {
            B[i] = A[i];
        }
        this.mergesort_body(A, B, 0, A.length);
        return A;
    }
}
