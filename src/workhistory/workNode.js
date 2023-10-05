export class workNode {
    constructor(jobTitle, details, dates, company) {
        this.jobTitle = jobTitle;
        this.details = details;
        this.dates = dates;
        this.company = company;
        this.next = null;
        this.prev = null;
    }

    setNextNode(node) {
        if (node instanceof workNode || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the workNode class')
        }
    }

    setPrevNode(node) {
        if (node instanceof workNode || node === null) {
            this.prev = node;
        } else {
            throw new Error('Previous node must be a member of the workNode class')
        }
    }

    getNextNode() {
        return this.next;
    }

    getPrevNode() {
        return this.prev;
    }
}
