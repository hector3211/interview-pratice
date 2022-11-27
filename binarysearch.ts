const aray = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const target = 33;
function search(arr: number[], needle: number): boolean {
  let lo = 0;
  let hi = arr.length;
  while (lo < hi) {
    const midPoint = Math.floor(lo + (hi - lo) / 2);
    const v = arr[midPoint];
    if (needle === v) {
      return true;
    } else if (needle > v) {
      lo = midPoint + 1;
    } else {
      hi = midPoint;
    }
  }
  return false;
}
console.log(search(aray, target));
