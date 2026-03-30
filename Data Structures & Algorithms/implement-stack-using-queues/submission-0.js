class MyStack {

    logAllMethods(obj) {
  const methods = new Set();

  let proto = obj;
  while ((proto = Object.getPrototypeOf(proto)) && proto !== Object.prototype) {
    Object.getOwnPropertyNames(proto)
      .filter(k => typeof proto[k] === "function")
      .forEach(k => methods.add(k));
  }

  console.log([...methods]);
}
    constructor() {
        this.q = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const oldSize = this.q.size();
        // put new element at the end
        this.q.push(x);
        // move complete q until it after it
        for (let i=0;i<oldSize;i++) {
            this.q.push(this.q.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.q.dequeue();
    }

    /**
     * @return {number}
     */
    top() {
        return this.q.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q.isEmpty()
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
