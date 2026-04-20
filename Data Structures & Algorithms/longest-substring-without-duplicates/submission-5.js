class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // idea: hashmap + sliding window
        // key increasing until we find already present
        // then reset position to one after the present
        if (s.length === 0 || s.length === 1) return s.length;
        let l = 0;
        let r = 1;
        let max = 1;
        const lookup = new Map();
        lookup.set(s[0], 0);
        while (r < s.length) {
            let crt = 1;
            while(r < s.length && !lookup.has(s[r])) {
                crt++;
                lookup.set(s[r],r);
                r++;
            }
            max = Math.max(max,crt);
            if (r === s.length) break;
            l = lookup.get(s[r]) + 1;
            r = l + 1;
            lookup.clear();
            lookup.set(s[l],l);
        }
        return max;
    }
}
