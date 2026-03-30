class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
   intersection(nums1, nums2) {
        const res = new Set();
        for (const i of nums1) {
            for (const j of nums2) {
                if (i === j) {
                    res.add(i);
                    break;
                }
            }
        }
        return Array.from(res);
    }
}
