const edNode = require('./edNode');

class DLL {
    constructor () {
        this.head = null;
        this.tail = null;
    }    

    addToHead(education, type) {
        const newHead = new edNode(education, type);
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

    addToTail(education, type) {
        const newTail = new edNode(education, type);
        const currentTail = this.tail;

        if (currentTail) {
            currentTail.setNextNode(newTail);
            newTail.setPrevNode(currentTail);
        }

        this.tail = newTail;
        if(!this.head) {
            this.head = newTail;
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }

        this.head = removedHead.getNextNode();

        if (this.head) {
            this.head.setPrevNode(null);
        }
        if (removedHead === this.tail) {
            this.removeTail();
        }

        return removedHead.ed;
    }

    removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.ed === data) {
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
            output += `${currentNode.ed} ${currentNode.type}`
            currentNode = currentNode.next;
        }

        console.log(output);
    }
}

module.exports = DLL;