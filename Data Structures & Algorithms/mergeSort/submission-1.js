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

    mergeSort(A) {
        let B = new Array(A.length);
        for (let i = 0; i < A.length; i++) {
            B[i] = A[i];
        }
        let size = 1;
        let src = A;
        let dst = B;
        while (size < A.length) {
            let i = 0;
            while (i < A.length) {
                const m = Math.min(i + size, A.length);
                const r = Math.min(m + size, A.length);
                if (r-i>1) this.merge(src, dst, i, m, r);
                i += 2*size;
            }
            size *= 2;
            [src, dst] = [dst, src];
        }
        if (A === dst) {
            for (let i=0;i<A.length;i++) {
                A[i] = B[i];
            }
        }
        return A;
    }
}
