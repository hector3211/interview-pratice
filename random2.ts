interface BNode<T> {
  value: T;
  prev: BNode<T>;
  next: BNode<T>;
}

class BsTree<T> {
  length: T;
  value: T;
  head: BNode<T>;
  tail: BNode<T>;
  constructor() {
    this.length;
    this.value;
    this.head = undefined;
    this.tail = undefined;
  }
}

function Prepend<T>(item: T, tree: BsTree<T>): void {
  const newNode = { value: item } as BNode<T>;
  if (!tree.head) {
    this.head = this.tail = newNode;
  }
  newNode.next = tree.head;
  tree.head.prev = newNode;
  tree.head = newNode;
}

const bst = new BsTree();
Prepend(10, bst as BsTree<number>);
console.log(bst);
