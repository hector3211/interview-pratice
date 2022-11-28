interface BNode<T> {
  value: T;
  left: BNode<T>;
  right: BNode<T>;
}
function compare(a: BNode<number> | null, b: BNode<number> | null): boolean {
  if (a && b === null) {
    // first check if both are null
    return true;
  }
  if (a || b == null) {
    // second check if one of them is null then false
    return false;
  }
  if (a.value !== b.value) {
    // finally if current values don't match up then false
    return false;
  }
  // recurse with left and right
  return compare(a.left, b.left), compare(a.right, b.right);
}
