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
        for (let i=0;i<k-1;i++) {
            rollingSum += arr[i];
        }
        for (let i=k-1;i<arr.length;i++) {
            rollingSum += arr[i];
            if (rollingSum / k >= threshold) cnt++;
            rollingSum -= arr[i-k+1];
        }
        return cnt;
    }
}
