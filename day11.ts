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
      let tmp = this.root;
      if (item > tmp.value) {
        if (!tmp.right) {
          tmp.right = node;
        } else {
          tmp = tmp.right;
        }
      } else {
        if (!tmp.left) {
          tmp.left = node;
        } else {
          tmp = tmp.left;
        }
      }
    }
  }
}

// function Append<T>(node: T, item: number): void {
//   let n = node as ANode<T>;
//   const newNode = { value: item } as ANode<T>;
//   if (!n) {
//     n = newNode;
//   } else {
//     let tmp = n;
//     if (item > tmp.value) {
//       if (!tmp.right) {
//         tmp.right = newNode;
//       } else {
//         tmp = tmp.right;
//       }
//     } else {
//       if (!tmp.left) {
//         tmp.left = newNode;
//       } else {
//         tmp = tmp.left;
//       }
//     }
//   }
// }

function InOrder<T>(n: T): void {
  const node = n as ANode<T>;
  if (!n) {
    return;
  } else {
    console.log(node.value);
    InOrder(node.left);
    InOrder(node.right);
  }
}

function PostTriv<T>(node: T): void {
  const n = node as ANode<T>;
  if (!n) {
    return;
  } else {
    PostTriv(n.right);
    console.log(n.value);
    PostTriv(n.left);
  }
}

function PreTriv<T>(node: T): void {
  const n = node as ANode<T>;
  if (!n) {
    return;
  } else {
    PreTriv(n.left);
    console.log(n.value);
    PreTriv(n.right);
  }
}

const bs = new Bst();
bs.append(10);
bs.append(5);
bs.append(12);
console.log(bs);
InOrder(bs.root);
console.log("\n");
PostTriv(bs.root);
console.log("\n");
PreTriv(bs.root);
