// this is double linked list not a binary tree
interface BNode<T> {
    value: T;
    prev: BNode<T>;
    next: BNode<T>;
}

class BsTree<T> {
    length?: T;
    head?: BNode<T>;
    tail?: BNode<T>;
    constructor() {
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = { value: item } as BNode<T>;
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    append(item: T): void {
        const newNode = { value: item } as BNode<T>;
        if (!this.tail) {
            this.tail = this.head = newNode;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

const tre = new BsTree();
tre.prepend(10);
tre.append(12);
console.log(tre);
