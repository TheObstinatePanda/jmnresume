import skillsNode from './skillsNode';

class skillDLL {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    addToHead(skill, skillDescription) {
        const newHead = new skillsNode(skill, skillDescription);
        const currentHead = this.head;

        if (currentHead) {
            currentHead.setPrevNode(newHead);
            newHead.setNextNode(currentHead);
        }

        this.head = newHead;
        if(!this.tail) {
            this.tail = newHead;
        }
    }

    addToTail(skill, skillDescription) {
        const newTail = new skillsNode(skill, skillDescription);
        const currentTail = this.tail;

        if (currentTail) {
            currentTail.setNextNode(newTail);
            newTail.setPrevNode(currentTail);
        }

        this.tail = newTail;
        if (!this.head) {
            this.head = newTail;
        }
    }

    removeHead() {
        
    }

    removeTail() {
        const removedTail = this.tail;
        if (!removedTail) {
            return;
        }

        this.tail = removedTail.getPrevNode();

        if (this.tail) {
            this.tail.setNextNode(null);
        }
        if (removedTail === this.head) {
            this.removeHead();
        }

        return removedTail.skill
    }

    removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.skill === data) {
                nodeToRemove = currentNode;
                break;
            }
            currentNode = currentNode.getNextNode();
        }

        if (nodeToRemove === this.head) {
            this.removeHead();
        } else  if (nodeToRemove === this.tail) {
            this.removeTail();
        } else {
            const nextNode = nodeToRemove.getNextNode();
            const prevNode = nodeToRemove.getPrevNode();
            nextNode.setPrevNode(prevNode);
            prevNode.setNextNode(nextNode);
        }

        return nodeToRemove;
    }

    toArray() {
        const result = [];
        let current = this.head;

        while (current) {
            result.push(current);
            current = current.next;
        }

        return result;
    }

    print() {
        let currentNode = this.head;
        let output = ``;

        while (currentNode !== null) {
            output += `${currentNode.skill} ${currentNode.skillDescription}`
            currentNode = currentNode.next;
        }

        console.log(output);
    }
}

export default skillDLL;
