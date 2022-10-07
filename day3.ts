const target = 10;
const list = [1, 5, 9, 12, 36, 10, 67]
function findTarget(arr: number[], target: number): boolean {
    let isIn = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            isIn = true
        }
    }
    return isIn
}
console.log(findTarget(list, target))


const arrayTwo = [1, 2, 3, 5, 6, 8, 9]
function findPow(arr: number[]): number[] {
    let startP = 0;
    let endP = array.length - 1;
    let powList = new Array(array.length);
    for (let i = endP; i > -1; i--) {
        let start = Math.floor(arr[startP] ** 2)
        let end = Math.floor(arr[endP] ** 2)
        if (end > start) {
            powList[i] = end;
            endP--;
        } else {
            powList[i] = start;
            startP++;
        }
    }
    return powList
}
console.log(findPow(arrayTwo))


