interface ANode<T> {
  value: T;
  left: ANode<T>;
  right: ANode<T>;
}

export default class Bst<T> {
  root?: ANode<T>;

  contructor() {
    this.root = undefined;
  }

  append(item: T): void {
    const node = { value: item } as ANode<T>;
    if (!this.root) {
      this.root = node;
    } else {
      let curr = this.root;
      while (curr) {
        if (item > curr.value) {
          if (!curr.right) {
            curr.right = node;
            return;
          } else {
            curr = curr.right;
          }
        } else if (item < curr.value) {
          if (!curr.left) {
            curr.left = node;
            return;
          } else {
            curr = curr.left;
          }
        }
      }
    }
  }

  search(item: T): boolean {
    let curr = this.root;
    while (curr) {
      if (item === curr.value) {
        return true;
      } else if (item > curr.value) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return false;
  }
}

function InOrder<T>(node: ANode<T> | undefined): void {
  const curr = node;
  if (!curr) {
    return;
  } else {
    InOrder(curr.left);
    console.log(curr.value);
    InOrder(curr.right);
  }
}

function PostTriv<T>(node: ANode<T> | undefined): void {
  const curr = node;
  if (!curr) {
    return;
  } else {
    PostTriv(curr.right);
    PostTriv(curr.left);
    console.log(curr.value);
  }
}

function PreTriv<T>(node: ANode<T> | undefined): void {
  const curr = node;
  if (!curr) {
    return;
  } else {
    console.log(curr.value);
    PreTriv(curr.left);
    PreTriv(curr.right);
  }
}

const bs = new Bst();
bs.append(10);
bs.append(13);
bs.append(11);
bs.append(3);
bs.append(5);
console.log(bs);
console.log("In order Triversal");
InOrder(bs.root as ANode<number>);
console.log("\n");
console.log("Post order Triversal");
PostTriv(bs.root as ANode<number>);
console.log("\n");
console.log("Pre order Triversal");
PreTriv(bs.root as ANode<number>);
console.log(bs.search(13));
console.log(bs.search(12));
