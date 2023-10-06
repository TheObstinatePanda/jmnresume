class navNode {
    constructor(title, url, preview) {
        this.title = title;
        this.url = url;
        this.preview = preview;
        this.next = null;
        this.prev = null;
    }

    setNextNode(node) {
        if (node instanceof navNode || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the naveNode class!')
        }
    }

    setPrevNode(node) {
        if (node instanceof navNode || node === null) {
            this.prev = node;
        } else {
            throw new Error('Previous node must be a membmer of the navNode class!')
        }
    }

    getNextNode() {
        return this.next;
    }

    getPrevNode() {
        return this.prev;
    }
}

export default navNode;