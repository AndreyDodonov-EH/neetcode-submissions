class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeElement(nums, length, k) {
        for(let i=k;i<length-1;i++) {
            nums[i] = nums[i+1];
        }
    }

    removeDuplicates(nums) {
        let lengthOfUniques = nums.length;
        for (let i=1;i<lengthOfUniques;) {
            if (nums[i] == nums[i-1]) {
                this.removeElement(nums,lengthOfUniques,i);
                lengthOfUniques--;
            } else {
                i++;
            }
        }
        return lengthOfUniques;
    }
}
