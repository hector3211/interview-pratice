interface ANode<T> {
  value: T;
  next: ANode<T>;
  prev: ANode<T>;
}

export default class LinkedList<T> {
  head?: ANode<T>;
  tail?: ANode<T>;
  length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  prepend(i: T): void {
    this.length++;
    const node = { value: i } as ANode<T>;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return;
  }

  append(i: T): void {
    this.length++;
    const node = { value: i } as ANode<T>;
    if (!this.tail) {
      // if no tail means theres no head
      this.head = this.tail = node; // head and tail become this node
      return;
    }
    node.prev = this.tail; // new nodes prev = tail
    this.tail.next = node; // tails next = new node
    this.tail = node; // tail becomes our new node
  }

  insertAt(i: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("list is not long enough index out of bounds");
    }
    if (idx === 0) {
      this.prepend(i);
      return;
    } else if (idx === this.length) {
      this.append(i);
      return;
    }
    this.length++;
    let curr = this.head; // temp variable
    for (let i = 0; curr && i < idx; i++) {
      // four loop to be before our index
      curr = curr.next; // keep nexting till our loop breaks
    }
    curr = curr as ANode<T>; // grab current node to be replaced
    const node = { value: i } as ANode<T>; // create newly node with value
    node.next = curr; // set our new node to equal the one being replaced
    node.prev = curr.prev; // getting the the curr nodes prev property
    curr.prev = node; //we close it up  by saying current node prev = our node
    // list A - B - (F) - C / (F) new node
    if (curr.prev) {
      // this means if were at C and C.Prev is B then .next is C we want to change that
      // this will point B.next to F
      curr.prev.next = curr;
    }
  }
  remove(item: T): T | undefined {
    if (this.length === 0) {
      this.head = this.tail = undefined;
      return;
    }
    let curr = this.head;
    for (let i = 0; curr && i < this.length; i++) {
      // loop through till we find item
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }
    if (!curr) {
      return undefined;
    }
    if (curr.prev) {
      curr.prev = curr.next;
    }
    if (curr.next) {
      curr.next = curr.prev;
    }
    if (curr === this.head) {
      this.head = curr.next;
    }
    if (curr === this.tail) {
      this.tail = curr.prev;
    }
    return curr.value;
  }

  // get(idx: number): T {
  //   return this, this.getAt(idx)?.value;
  // }
  // removeAt(idx: number): T | undefined {
  //   const node = this.getAt(idx);
  //   if (!node) {
  //     return undefined;
  //   }
  // }

  // private getAt(idx: number): ANode<T> | undefined {
  //   let curr = this.head;
  //   for (let i = 0; curr && i < this.length; i++) {
  //     curr = curr.next;
  //   }
  //   return curr;
  // }
}
const list = new LinkedList();
list.prepend(10);
console.log(list.length);
list.append(12);
console.log(list.length);
