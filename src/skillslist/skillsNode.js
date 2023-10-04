class skillsNode {
    constructor(skill, skillDescription) {
        this.skill = skill;
        this.desc = skillDescription;
        this.next = null;
        this.prev = null;
    }

    setNextNode(node) {
        if (node instanceof skillsNode || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the skillsNode class!')
        }
    }

    setPrevNode(node) {
        if (node instanceof skillsNode || node === null) {
            this.prev = node;
        } else {
            throw new Error('Preious node must be a member of the skillsNode class!')
        }
    }

    getNextNode() {
        return this.next;
    }

    getPrevNode() {
        return this.prev;
    }
}

export default skillsNode;