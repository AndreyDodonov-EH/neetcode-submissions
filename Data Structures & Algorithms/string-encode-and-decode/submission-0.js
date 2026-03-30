class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded ="";
        for (const str of strs) {
            encoded += str + '\0';
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = new Array();
        for(let i=0;i<str.length;) {
            let crt = "";
            while (str[i] !== '\0') {
                crt += str[i];
                i++;
            }
            decoded.push(crt);
            i++;
        }
        return decoded;
    }
}
