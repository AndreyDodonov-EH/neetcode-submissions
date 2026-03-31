class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const letterCntMap = new Map();
        for (let i=0;i<s.length;i++) {
            let cnt = letterCntMap.get(s[i]);
            if (cnt === undefined) {
                letterCntMap.set(s[i], 1);
            } else {
                letterCntMap.set(s[i], cnt+1);
            }
            cnt = letterCntMap.get(t[i]);
            if (cnt === undefined) {
                letterCntMap.set(t[i], -1);
            } else {
                letterCntMap.set(t[i], cnt-1);
            }
        }
        console.log(letterCntMap);
        return Array.from(letterCntMap.values()).every(v => v === 0);
    }
}
