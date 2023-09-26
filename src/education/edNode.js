class edNode {
    constructor(education, type) {
        this.ed = education;
        this.type = type;
        this.next = null;
        this.prev = null;
    }

    setNextNode(node) {
        if (node instanceof edNode || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the edNode class!')
        }
    }

    setPrevNode(node) {
        if (node instanceof edNode || node === null) {
            this.prev = node;
        } else {
            throw new Error('Preious node must be a member of the edNode class!')
        }
    }

    getNextNode() {
        return this.next;
    }

    getPrevNode() {
        return this.prev;
    }
}

module.exports = edNode;