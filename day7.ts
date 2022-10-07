function storeCheckout<T>(line: Queue<T>):void{
    while(line.size() > 0){
        let customer = line.dequeue();
        console.log(`${customer.name} is checking out with ${customer.items}`)
    }
}
type List<T> = {
    name?: string;
    items?: T[];
}
class Queue<T> {
    private data: List<T>[];
    constructor(q: List<T>[] = []){
        this.data = q;
    }
    enqueue(value: List<T>): void {
        this.data.push(value);
    }
    size():number{
        return this.data.length;
    }
    dequeue(): any{
        if(this.size() < 1){
            throw new Error("empty queue")
        }
        return this.data.shift();
    }
    peak():List<T> | Error{
        if(this.size() < 1){
            throw new Error("empty queue")
        }
        return this.data[0]
    }
}

const groceryQueue = new Queue([
    {name:"johnny",items:["apples","bananas"]},
    {name:"jane",items:["oranges","watermelon"]},
]);
groceryQueue.enqueue({name:"same",items:["apples","bananas"]})
// console.log(groceryQueue.dequeue())
// console.log(groceryQueue.peak())
storeCheckout(groceryQueue)
