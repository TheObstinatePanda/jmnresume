import navNode from './navNode'

class navDLL {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    addToHead(title, url, preview) {
        const newHead = new navNode(title, url, preview);
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
    
    addToTail(title, url, preview) {
        const newTail = new navNode(title, url, preview);
        const currentTail = this.tail;

        if(currentTail) {
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

        return removedHead.title;
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

        return removedTail.title;
    }

    removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.title === data) {
                nodeToRemove = currentNode;
                break;
            }
            currentNode = currentNode.getNextNode();
        }

        if (nodeToRemove === this.head) {
            this.removeHead();
        } else if (nodeToRemove === this.tail) {
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

        return result
    }

    print() {
        let currentNode = this.head;
        let output = ``;

        while (currentNode !== null) {
            output += `${currentNode.title} ${currentNode.url} ${currentNode.preview}`
            currentNode = currentNode.next;
        }

        console.log(output);
    }
}

export default navDLL