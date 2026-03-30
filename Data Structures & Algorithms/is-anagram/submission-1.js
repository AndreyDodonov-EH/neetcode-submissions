class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const s_map = new Map();
        const t_map = new Map();
        for (let i=0;i<s.length;i++) {
            let s_count = s_map.get(s[i]);
            if (s_count === undefined) {
                s_map.set(s[i], 1);
            } else {
                s_map.set(s[i], s_count+1)
            }
        }
for (let i=0;i<t.length;i++) {

            let t_count = t_map.get(t[i]);
            if (t_count === undefined) {
                t_map.set(t[i], 1);
            } else {
                t_map.set(t[i], t_count+1)
            }
}

        console.log(s_map)
        console.log(t_map)
        for (const [k, v] of s_map) {
            if (!t_map.has(k)) return false;
            if (v !== t_map.get(k)) return false;
        }
        return true;
    }
}

