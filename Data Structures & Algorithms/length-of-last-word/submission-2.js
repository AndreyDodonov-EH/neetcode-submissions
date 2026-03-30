class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = s.length-1;
        while (i>0 && s[i] === " ") i--;
        const end = i;
        while (i>=0 && s[i] !== " ") i--;
        return (end - i);
    }
}
