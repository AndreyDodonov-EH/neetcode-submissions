class ListNode {
    constructor(val = 0,
        next = null,
        prev = null ) {
            this.val = val;
            this.next = next;
            this.prev = prev;
        }
}
class MyDeque {
    constructor() {
        this.dummyHead = new ListNode();
        this.dummyTail = new ListNode();
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return (this.dummyHead.next === this.dummyTail);
    }

    /**
     * @param {number} value
     */
    append(value) {
        const tail = this.dummyTail.prev;
        const newbie = new ListNode(value, this.dummyTail, tail);
        this.dummyTail.prev = newbie;
        tail.next = newbie;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const head = this.dummyHead.next;
        const newbie = new ListNode(value, head, this.dummyHead);
        this.dummyHead.next = newbie;
        head.prev = newbie;

    }

    /**
     * @return {number}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        const tail = this.dummyTail.prev;
        const newTail = tail.prev;
        // connect previous to the tail to the dummy tail
        newTail.next = this.dummyTail;
        // connect dummy tail to our new tail
        this.dummyTail.prev = newTail;
        return tail.val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }
        const head = this.dummyHead.next;
        const newHead = head.next;
        newHead.prev = this.dummyHead;
        this.dummyHead.next = newHead;
        return head.val;
    }
}