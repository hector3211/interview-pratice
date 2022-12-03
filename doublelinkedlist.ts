interface ANode<T> {
  value: T;
  prev: ANode<T>;
  next: ANode<T>;
}

class Dlist<T> {
  length: number;
  head?: ANode<T>;
  tail?: ANode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  preappend(item: T): void {
    this.length++;
    const newNode = { value: item } as ANode<T>;
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  append(item: T): void {
    this.length++;
    const newNode = { value: item } as ANode<T>;
    if (!this.tail) {
      this.tail = this.head = newNode;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  remove(item: T): void {
    if (this.length === 0) {
      return;
    }
    let curr = this.head;
    while (curr) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }
    if (!curr) {
      return;
    }
    this.length--;
    if (curr.prev) {
      curr.prev.next = curr.next;
    }
    if (curr.next) {
      curr.next.prev = curr.prev;
    }
    if (curr === this.head) {
      this.head = curr.next;
    }
    if (curr === this.tail) {
      this.tail = curr.prev;
    }
  }

  getall(): void {
    let curr = this.head;
    if (!curr) {
      return;
    }
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const dbl = new Dlist();
dbl.preappend(19);
dbl.append(29);
dbl.append(39);
dbl.append(59);
dbl.getall();
dbl.remove(59);
console.log("removing.....");
dbl.getall();
