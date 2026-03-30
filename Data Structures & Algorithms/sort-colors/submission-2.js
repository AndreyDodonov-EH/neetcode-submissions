class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    swap(nums,i,j) {
        const tmp=nums[i];
        nums[i]=nums[j];
        nums[j]=tmp;
    }

    sortColors(nums) {
        let p0=0;
        let p2=nums.length;
        let i=0;
        while(i<p2) {
            if (nums[i]===0) {
                this.swap(nums,i++,p0++);
            } else if (nums[i]===2) {
                this.swap(nums,i,--p2);
            } else {
                i++;
            }
        }
    }
}
