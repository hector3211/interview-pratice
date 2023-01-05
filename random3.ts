const arr: number[] = [1, 2, 3, 4, 5];
const doubles: number[] = arr.map((v) => v * 2);
const firstInDouble: number = doubles[0];
const lastInDouble: number = doubles[doubles.length - 1];
const arr2: number[] = [1, 2, 3, 4, 5].map((v) => v * 2);
console.log(doubles);
console.log(firstInDouble);
console.log(lastInDouble);
console.log(arr2);

const inter: Record<string, number> = {};
inter["hector"] = 0;
inter["madDog"] = 0;
console.log(inter);

const notOrdList: number[] = [4, 3, 2, 1];
for (let i = 0; i < notOrdList.length; i++) {
  for (let j = i + 1; j < notOrdList.length; j++) {
    if (notOrdList[j] < notOrdList[i]) {
      const tmp = notOrdList[i];
      notOrdList[i] = notOrdList[j];
      notOrdList[j] = tmp;
    }
  }
}
console.log(notOrdList);

interface ANode<T> {
  value: T;
  next: ANode<T>;
  prev: ANode<T>;
}

class List<T> {
  head: ANode<T> | undefined;
  tail: ANode<T> | undefined;
  length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  preAppend(item: T): void {
    const newNode = { value: item } as ANode<T>;
    this.length += 1;
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  postAppend(item: T): void {
    const newNode = { value: item } as ANode<T>;
    this.length += 1;
    if (!this.tail) {
      this.tail = this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  remove(item: T): void {
    if (this.length === 0) {
      return;
    } else {
      this.length -= 1;
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
  }
  getAll(): void {
    if (!this.length) {
      return;
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }
}

const list = new List();
list.preAppend(10);
list.preAppend(11);
list.preAppend(12);
list.remove(11);
console.log(list);
console.log(list.getAll());
