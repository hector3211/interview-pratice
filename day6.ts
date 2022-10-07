// Implementation of a Binary Seach Tree
class TreeNode{
    public value:number;
    public left:TreeNode | null;
    public right:TreeNode | null;

    constructor(value:number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    public root:TreeNode | null;
    constructor(root:TreeNode | null){
        this.root = root;
    }

    public insert(node:TreeNode | null = this.root,value:number):TreeNode {
        if(node === null){
            const root = new TreeNode(value);
            return root;
        }else{
            if(value < node.value){
                node.left = this.insert(node.left, value)
            }else{
                node.right = this.insert(node.right, value)
            }
            return node;
        }
    }
    public inOrderTraversal(root:TreeNode | null = this.root):void{
        let tmp = root;
        if(tmp !== null){
            this.inOrderTraversal(tmp.left)
            console.log(tmp.value)
            this.inOrderTraversal(tmp.right)
        }
    }
    public preOrderTraversal(root:TreeNode | null = this.root):void{
        let tmp = root;
        if(tmp !== null){
            console.log(tmp.value)
            this.inOrderTraversal(tmp.left)
            this.inOrderTraversal(tmp.right)
        }
    }
    public postOrderTraversal(root:TreeNode | null = this.root):void{
        let tmp = root;
        if(tmp !== null){
            this.inOrderTraversal(tmp.left)
            this.inOrderTraversal(tmp.right)
            console.log(tmp.value)
        }
    }
    public search(node:TreeNode | null = this.root,value:number):boolean{
        if(node === null){
            return false;
        }
        if(node.value === value){
            return true;
        }else if(value < node.value){
            return this.search(node.left,value);
        }else if(value > node.value){
            return this.search(node.right,value)
        }
        return false;
    }
}

const rootNode = new TreeNode(50);
rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);
const BsTree = new Bst(rootNode);
BsTree.insert(BsTree.root, 30)
BsTree.insert(BsTree.root, 20)
BsTree.insert(BsTree.root, 40)
BsTree.insert(BsTree.root, 70)
BsTree.insert(BsTree.root, 60)
BsTree.insert(BsTree.root, 80)
// BsTree.inOrderTraversal()
// console.log("\n")
// BsTree.preOrderTraversal()
// console.log("\n")
// BsTree.postOrderTraversal()
console.log(BsTree.search(BsTree.root, 80))

