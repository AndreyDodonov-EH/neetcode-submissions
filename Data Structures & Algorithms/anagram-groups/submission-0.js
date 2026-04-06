class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // how can we define if two strings are anagrams?
        // by comparing the hashmaps or arrays of their char frequency
        // then we create a hashmap where keys are string representation of those arrays
        // and values are corresponding strings
        // this way we get them into buckets
        // then we return .values()
        const aCode = "a".charCodeAt(0);
        function key(str) {
            let arr = new Uint8Array(26);
            for(const c of str) {
                arr[c.charCodeAt(0) - aCode]++;
            }
            return arr.toString();
        }
        // Map<string, string[]>
        const keysToLists = new Map();
        for (const str of strs) {
            const crtKey = key(str);
            const list = keysToLists.get(crtKey);
            if (list) {
                list.push(str);
            } else {
                keysToLists.set(crtKey, [str]);
            }
        }
        return Array.from(keysToLists.values());
    }
}
