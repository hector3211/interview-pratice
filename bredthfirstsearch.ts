interface BinaryNode<T> {
  value: T;
  left: BinaryNode<T>;
  right: BinaryNode<T>;
}

class Tree<T> {
  root?: BinaryNode<T>;
  constructor() {
    this.root = undefined;
  }

  append(item: T) {
    const newNode = { value: item } as BinaryNode<T>;
    if (!this.root) {
      this.root = newNode;
    } else {
      let curr = this.root;
      while (curr) {
        if (newNode.value < curr.value) {
          if (!curr.left) {
            curr.left = newNode;
            return;
          } else {
            curr = curr.left;
          }
        } else {
          if (!curr.right) {
            curr.right = newNode;
            return;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }
}

function InOrder(node: BinaryNode<number>): void {
  if (!node) {
    return;
  } else {
    console.log(node.value);
    InOrder(node.left);
    InOrder(node.right);
  }
}

function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q = [head]; // pretend this is a que........
  while (q.length) {
    const curr = q.shift();
    // search
    if (curr?.value === needle) {
      return true;
    }
    if (curr?.left) {
      q.push(curr.left);
    }
    if (curr?.right) {
      q.push(curr.right);
    }
  }
  return false;
}

const bst = new Tree();
bst.append(10);
bst.append(5);
bst.append(13);
bst.append(15);
bst.append(19);
bst.append(3);
bst.append(8);
console.log(bst);
console.log(bfs(bst.root as BinaryNode<number>, 17));
console.log(InOrder(bst.root as BinaryNode<number>));
