class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function branchSums(root: BinaryTree): number[] {
    // Write your code here.
    let listOfSums: number[] = [];
    sumUp(root, listOfSums);
    return listOfSums;
}

function sumUp(node: BinaryTree | null, sumList: number[]): void {
    if (!node) return;
    let currentSum = 0;
    currentSum += node.value;
    if (node.left && node.right === null) {
        sumList.push(currentSum);
        return;
    } else {
        sumUp(node.left, sumList)
        sumUp(node.right, sumList)
    }
}
