class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isValid(s) {
    let expected = new Array();
    const openToClose = {'(':')','[':']','{':'}'}
    for (let i=0;i<s.length;i++) {
        const expectedClosing = openToClose[s[i]];
        if (expectedClosing) {
            expected.push(expectedClosing);
        } else {
            if (expected.pop() !== s[i]) return false;
        }
    }
    if (expected.length !== 0) return false;
    return true;
};
}
