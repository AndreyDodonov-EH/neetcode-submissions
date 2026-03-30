class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = s.length-1;
        while (i>0 && s[i] === " ") i--;
        const end = i;
        console.log(end);
        while (i>=0 && s[i] !== " ") i--;
        console.log(i)
        return (end - i);
    }
}
