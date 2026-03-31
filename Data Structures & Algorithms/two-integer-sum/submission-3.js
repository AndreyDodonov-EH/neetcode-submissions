class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // 1. sort
        let sorted = new Array(nums.length);
        for (let i=0; i<nums.length; i++) {
            sorted[i] = nums[i];
        }
        sorted.sort((a,b)=>(a-b));
        let l = 0;
        let r = sorted.length - 1;
        let res = []
        while (l<r) {
            console.log(l,r)
            console.log(`${sorted[l]} + ${sorted[r]}`)
            const sum = sorted[l] + sorted[r];
            if (sum < target) {
                l++;
            } else if (sum > target) {
                r--;
            } else {
                break;
            }
        }
        res[0] = nums.indexOf(sorted[l]);
        res[1] = nums.lastIndexOf(sorted[r]);
        return res;
    }
}
