interface Dict {
  [name: string]: any;
  [score: number]: any;
}

function uop(teams: string[][], results: number[]) {
  const winners: Dict = { name: "", score: -Infinity };
  const scores: Record<string, number> = {};
  for (let i = 0; i < results.length; i++) {
    const winnerIdx = results[i] === 0 ? 1 : 0;
    const currentWinner = teams[i][winnerIdx];
    if (currentWinner in scores) {
      scores[currentWinner] += 3;
    } else {
      scores[currentWinner] = 3;
    }
    if (winners.score < scores[currentWinner]) {
      winners.name = currentWinner;
      winners.score = scores[currentWinner];
    }
  }
  return winners.name;
}
const teams = [
  ["Html", "C#"],
  ["C#", "Python"],
  ["Python", "Html"],
];
const result = [0, 0, 1];
console.log(uop(teams, result));

// function takes an object and returns an object
// function takes(person:myObj): myObj {
//     return {name:person.name,age:person.age}
// }

// console.log(takes({name:"hector","age":26}))
// function that doesnt say what it returns
// function heller(person:myObj){
//     return {name:person.name,age:person.age}
// }
// console.log(heller({name:"hector","age":28}))

function generics<T>(x: T): T[] {
  return [x, x, x];
}
// console.log(generics("hey"))

function sq(arr: number[]): number[] {
  let startP = 0;
  let endP = arr.length - 1;
  const powList = new Array(arr.length);
  for (let i = endP; i > -1; i--) {
    const start = Math.floor(arr[startP] ** 2);
    const end = Math.floor(arr[endP] ** 2);
    if (end > start) {
      powList[arr[i]] = end;
      endP--;
    } else {
      powList[arr[i]] = start;
      startP++;
    }
  }
  return powList;
}

// console.log(sq([1,2,3,5,6,8,9]))
// function fizzBuzz():void{
//     for(let i =  1; i < 100; i++){
//         if (i % 3 && i %5 == 0){
//             console.log(`FizzBuzz`)
//         }else if ( i %3 ===0){
//             console.log("Fizz")
//         }else if ( i % 5 ===0){
//             console.log("Buzz")
//         }else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz()
//
