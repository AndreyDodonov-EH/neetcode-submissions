/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        let answer = [];
        for (let i=0;i<pairs.length;i++) {
            const cur = pairs[i];
            let j=i-1;
            while(j>=0 && cur.key < pairs[j].key) {
                pairs[j+1] = pairs[j];
                j--;
            }
            pairs[j+1] = cur;
            let state = [];
            for(let j=0;j<pairs.length;j++) {
                state.push(pairs[j]);
            }
            answer.push(state);
        }
        return answer;
    }
}
