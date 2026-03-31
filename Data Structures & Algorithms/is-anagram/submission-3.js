class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const alphabetSize = 26;
        const as = new Array(alphabetSize).fill(0);
        const at = new Array(alphabetSize).fill(0);
        const charA = "a".charCodeAt(0);
        for (let i=0;i<s.length;i++) {
            as[s.charCodeAt(i)-charA]++;
            at[t.charCodeAt(i)-charA]++;
        }
        for (let i=0;i<alphabetSize;i++){
            if (as[i] !== at[i]) return false;
        }
        return true;
    }
}
