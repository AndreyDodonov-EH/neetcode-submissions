class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
             arr.sort((a, b) => a - b);
        let count = 0;
        let runLength = 1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] !== arr[i]) {
                if (arr[i - 1] + 1 === arr[i]) {
                    count += runLength;
                }
                runLength = 0;
            }
            runLength++;
        }
        return count;
    }
}
