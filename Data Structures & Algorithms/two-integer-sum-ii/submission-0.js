class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i=0;i<numbers.length;i++) {
            let l = i+1;
            let r = numbers.length-1;
            while (l<=r) {
                const m = l + Math.floor((r-l)/2);
                const sum = numbers[i] + numbers[m];
                if (target < sum) {
                    r = m - 1;
                } else if (sum < target) {
                    l = m + 1;
                } else {
                    return [i+1, m+1];
                }
            }
        }
        return [];
    }

}
