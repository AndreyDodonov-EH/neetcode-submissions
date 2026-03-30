class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let pref = ""
        for (let i=0;i<200;i++) {
            let curLetter = strs[0][i];
            if (strs[0].length <= i) return pref;
            for (let j=1;j<strs.length;j++) {
                if (strs[j].length <= i) return pref;
                if (strs[j][i] !== curLetter) return pref;
            }
            pref += curLetter;
        }
        return pref;
    }
}
