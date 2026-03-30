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
    swap(A, i, j) {
        const tmp = A[j];
        A[j] = A[i];
        A[i] = tmp;
    }

    find_idx_of_first_bigger(keyVal, A, l, r) {
        let firstBiggerIdx = -1;
        if (A[l].key > keyVal) {
            return l;
        }
        // use gallopping to find a window where firstBiggerIndex will be
        let l_b = l + 1;
        let step = 1;
        let r_b = l_b + step;
        while ((r_b < r) && (A[r_b].key <= keyVal)) {
            l_b = r_b + 1;
            step = step * 2;
            r_b = l_b + step;
        }
        if (r_b >= r) {
            r_b = r - 1;
        }
        r_b++; // we prefer non-inclusive ranges

        while (l_b < r_b) {
            const m = l_b + Math.floor((r_b - l_b) / 2);
            if (A[m].key > keyVal) {
                r_b = m;
                firstBiggerIdx = m;
            } else {
                l_b = m + 1;
            }
        }
        return firstBiggerIdx;
    }

    find_idx_of_last_smaller(keyVal, A, l, r) {
        let lastSmallestIdx = -1;
        if (A[r - 1].key < keyVal) {
            return r - 1;
        }

        //  use gallopping to find a window where lastSmallerIdx will be
        let l_b = l;
        let step = 1;
        let r_b = l_b + step;
        while ((r_b < r - 1) && (A[r_b].key < keyVal)) {
            lastSmallestIdx = r_b;
            l_b = r_b + 1;
            step = step * 2;
            r_b = l_b + step;
        }
        if (r_b >= r - 1) {
            r_b = r - 2;
        }
        r_b++;

        while (l_b < r_b) {
            let midIdx = l_b + Math.floor((r_b - l_b) / 2);
            if (A[midIdx].key < keyVal) {
                lastSmallestIdx = midIdx;
                l_b = midIdx + 1;
            } else {
                r_b = midIdx;
            }
        }
        return lastSmallestIdx;
    }

    reverse(A, p, r) {
        while (p < r) {
            this.swap(A, p++, --r);
        }
    }

    swap_blocks(A, l, m, r) {
        this.reverse(A, l, m);
        this.reverse(A, m, r);
        this.reverse(A, l, r);
    }

    merge_in_place(A, l, m, r) {
        while (m < r && A[m - 1].key > A[m].key) {
            const left_idx = this.find_idx_of_first_bigger(A[m].key, A, l, m);
            const right_idx = this.find_idx_of_last_smaller(A[left_idx].key, A, m, r);
            const first_unsorted_idx = right_idx + 1;
            if ((first_unsorted_idx - left_idx) > 2) {
                this.swap_blocks(A, left_idx, m, first_unsorted_idx);
            } else {
                this.swap(A, left_idx, right_idx);
            }
            const right_block_size = (right_idx - m + 1);
            l = left_idx + right_block_size;
            m = first_unsorted_idx;
        }
    }

    mergeSort(A) {
        let size = 1;
        while (size < A.length) {
            let i = 0;
            while (i < A.length) {
                const m = Math.min(i + size, A.length);
                const r = Math.min(m + size, A.length);
                if (r - i > 1) this.merge_in_place(A, i, m, r);
                i += 2 * size;
            }
            size *= 2;
        }
        return A;
    }
}
