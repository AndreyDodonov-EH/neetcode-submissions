class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. count how many times each element occurs, save results into the map
        const map = new Map();
        for (let i=0;i<nums.length;i++) {
            const val = map.get(nums[i]);
            if (val === undefined) {
                map.set(nums[i],1);
            } else {
                map.set(nums[i],val+1);
            }
        }
        // 2. sort the values of the map
        const arr = Array.from(map.values());
        arr.sort((a,b)=>(b-a));
        // 3. find the key for the value in the map
        const freqs = arr.slice(0,k);
        const res = [];
        for (const [key,val] of map) {
            if (freqs.includes(val)) res.push(key);
        }
        return res;
    }
}
