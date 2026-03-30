class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    swap(s, i, j) {
        const tmp = s[i];
        s[i] = s[j];
        s[j] = tmp;
    }

    reverseString(s) {
        for (let i=0, j=s.length-1;i<j;i++,j--) {
            this.swap(s, i, j);
        }
    }
}
