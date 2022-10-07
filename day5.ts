function bst(node:BinaryNode<number>|null,target:number):boolean{
    if(!node){
        return false;
    }
    if(node.value === target){
        return true;
    }
    if(node.value < target){
        return bst(node.right,target);
    }
    return bst(node.left,target);
}
/*
    Breadth-firt-search
*/
interface BinaryNode<T> {
    left?:BinaryNode<T> | null;
    right?: BinaryNode<T> | null;
    value: number;
}

function bfs(head:BinaryNode<number>,needle:number):boolean{
    const que: (BinaryNode<number> | null)[] = [head]
    while(que.length){
        // .shift() removes the first item an a list
        // so here we remove our head Node first
        const current = que.shift() as BinaryNode<number> | undefined | null;
        // if we find our node that = our needle we return
        if(current?.value === needle){
            return true;
        }
        // if not we keep search starting from left to right
        que.push(current.left);
        que.push(current.right)
    }
    return false;
}

// Binary Tree Comparison
function compare(a:BinaryNode<number>|null,b:BinaryNode<number>|null):boolean{
    // if they both are null
    if(a && b === null){
        return true;
    }
    // if one is null then not the same
    if(a === null || b === null){
        return false;
    }
    // if they dont equal each other
    if(a.value !== b.value){
        return false;
    }
    return compare(a.left,b.left) && compare(a.right,b.right);
}
