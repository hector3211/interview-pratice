interface Users<T,U> {
    key:T |string;
    score:U | number;
}
const data = {"python":1,"C#":5,"Js":10}
function first<T,U>(dictData:Record<string,number>){
    let final:Users<T,U> = {key:"",score:0}
    for(let i =0; i< 3;i++){
        if("python" in dictData){
            final.key = "python";
            final.score = dictData["python"]
        }
    }
    return final;
}
// console.log(first(data))

interface Second<T> {
    name:T | string;
    age:T;

}
function second<T>(dataTwo:Second<T>[]){
    let name = false;
    for(let i =0; i < dataTwo.length; i++){
        if(dataTwo[i].name === "drama321"){
            name = true
        }
    }
    return name
}
let newUsers = [{name:"drama321", age:29},{name:"madDog321",age:33}]
// console.log(second(newUsers))
interface Third<T,U> {
    key:T ;
    value: U ;
}
type DictType = Third<number,string>;
const firstList = [1,2,5,7,8,9];
const third = (arr:number[]) => {
    let dict: DictType[] = [];
    let hey = "hey";
    for(let num of arr){
        dict.push({key:Math.floor(num**2),value:hey+num})
    }
    console.log(dict)
}

// console.log(third(firstList))
//
const coins = [5,7,1,1,2,3,22];
const fourth = (coinsArr:number[]) =>{
    let orderedCoins = coinsArr.sort((a,b)=> a-b);
    let currentChange = 0;
    for(let i = 0; i < orderedCoins.length; i++){
        if(orderedCoins[i] > currentChange+1){
            return currentChange +1;
        }
        currentChange += orderedCoins[i];
    }
    return currentChange +1;
}
console.log(fourth(coins));
