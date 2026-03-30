class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let greatest = arr[arr.length-1];
        arr[arr.length-1] = -1;
        for (let i=arr.length-2;i>=0;i--) {
            const tmp = arr[i];
            arr[i] = greatest;
            greatest = Math.max(greatest, tmp);
        }
        return arr;
    }
}
