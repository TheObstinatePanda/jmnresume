import {workNode} from './workNode'

export class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(jobTitle, details, dates, company) {
        const newHead = new workNode(jobTitle, dates, details, company);
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

    addToTail(jobTitle, details, dates, company) {
        const newTail = new workNode(jobTitle, company, dates, details);
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

        return removedHead.data
    }

    removeTail() {
        const removedTail = this.tail;
        if (!removedTail) {
            return;
        }

        this.tail = removedTail.getPrevNode();

        if (this.tail) {
            this.sail.setNextNode(null);
        }
        if (removedTail === this.head) {
            this.removeHead();
        }

        return removedTail.jobTitle
    }

    removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;
        while (currentNode !== null) {
            if(currentNode.jobTitle === data) {
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

        return result;
    }
    
    print() {
        let currentNode = this.head;
        let output = '';
        while (currentNode !== null) {
            output += currentNode.jobTitle + ' '
            output += currentNode.details + ' '
            output += currentNode.dates
            currentNode = currentNode.next;
        }
        console.log(output)
    }
}
