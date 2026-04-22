class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let cnt = 0;
        let rollingSum = 0;
        for (let i=0;i<k;i++) {
            rollingSum += arr[i];
        }
        if (rollingSum / k >= threshold) cnt++;
        for (let i=k;i<arr.length;i++) {
            rollingSum -= arr[i-k];
            rollingSum += arr[i];
            if (rollingSum / k >= threshold) cnt++;
        }
        return cnt;
    }
}
