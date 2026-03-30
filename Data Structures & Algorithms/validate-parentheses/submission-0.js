class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isValid(s) {
    let expected = new Array();
    for (let i=0;i<s.length;i++) {
        switch (s[i]) {
            case '(':
                expected.push(')');
            break;
            case ')':
                if (expected.pop() !== ')') return false;
            break;
             case '{':
                expected.push('}');
            break;
            case '}':
                if (expected.pop() !== '}') return false;
            break;
             case '[':
                expected.push(']');
            break;
            case ']':
                if (expected.pop() !== ']') return false;
            break;
        }
    }
    if (expected.length !== 0) return false;
    return true;
};
}
