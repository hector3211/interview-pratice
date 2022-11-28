interface ANode<T> {
  value: T;
  prev: ANode<T>;
  next: ANode<T>;
}

class Dlinkedlist<T> {
  head: ANode<T>;
  tail: ANode<T>;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  preappend(item: T): void {
    const newNode = { value: item } as ANode<T>;
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
    }
  }
}
