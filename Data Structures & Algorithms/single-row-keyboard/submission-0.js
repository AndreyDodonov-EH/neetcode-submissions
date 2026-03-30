class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    getPos(keyboard, letter) {
        for (let i=0;i<keyboard.length;i++) {
            if (keyboard[i] === letter) return i;
        }
        return -1;
    }
    calculateTime(keyboard, word) {
        let pos = 0;
        let time = 0;
        for (let i=0;i<word.length;i++) {
            const neededPos = this.getPos(keyboard, word[i]);
            time += Math.abs(neededPos - pos);
            pos = neededPos;
        }
        return time;
    }
}
