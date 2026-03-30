class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(ch) {
        return (
            ('a'.charCodeAt(0) <= ch.charCodeAt(0) && ch.charCodeAt(0)  <= 'z'.charCodeAt(0)) 
        ||  ('0'.charCodeAt(0) <= ch.charCodeAt(0) && ch.charCodeAt(0) <= '9'.charCodeAt(0))
        )
    }

    isPalindrome(s) {
        s = s.toLowerCase();
        for (let i=0,j=s.length-1;i<j;i++,j--) {
            while(i<j && !this.isAlphanumeric(s[i])) i++;
            while(i<j && !this.isAlphanumeric(s[j])) j--;
            if (s[i] !== s[j]) {
                return false;
            }
        }
        return true;
    };
}
