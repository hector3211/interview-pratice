// finding target in an sorted or unsorted array
const arr: number[] = [1, 3, 5, 6, 7, 8, 9]

const findValue = (ar: number[], target: number): boolean => {
    if (ar[0] === target) return true
    let left = 0;
    let right = ar.length - 1
    while (left < right) {
        let mid = (left + right) / 2
        if (ar[mid] === target && ar[mid - 1] < target) return true
        if (ar[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
}

console.log(findValue(arr, 1))


