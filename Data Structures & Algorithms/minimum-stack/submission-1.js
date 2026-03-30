class MinStack {
    constructor() {
        this.stack = [];
        this.min = 0;
    }

    push(val) {
        if ( this.stack.length === 0) {
            this.stack.push(0);
            this.min = val;
        } else {
            const diff = val - this.min;
            this.stack.push(diff);
            if (diff < 0) {
                this.min = val;
            }
        }
    }
    pop() {
        if (this.stack.length === 0) {
            return;
        }
        const diff = this.stack.pop();
        if (diff < 0) { // we need to update the min
            this.min = this.min - diff;
        }
    }
    top() {
        const diff = this.stack[this.stack.length-1];
        if (diff < 0) {
            return this.min;
        }
        return diff + this.min;
    }
    getMin() {
        return this.min;
    }
}