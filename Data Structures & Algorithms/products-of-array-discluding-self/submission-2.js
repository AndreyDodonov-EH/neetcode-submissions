class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // obvious solution - calculate value where all are multiplied, and then divide
        let mult = 1;
        let nullCnt = 0;
        let nullPos = -1;
        for (let i=0;i<nums.length;i++) {
            if (nums[i] !== 0) { 
                mult *= nums[i];
            } else {
                nullCnt++;
                nullPos = i;
                if (nullCnt > 1) break;                    
            }
        }
        if (nullCnt === 0) {
            for (let i=0;i<nums.length;i++)
                nums[i] = mult / nums[i];
        } else {
            for (let i=0;i<nums.length;i++)
                nums[i] = 0;
            if (nullCnt === 1) nums[nullPos] = mult;
        }
        return nums;
    }
}
