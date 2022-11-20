const strOne: string = "salesmanes";
const strTwo: string = "hecttooorrr";
// dict["hello"] = 1
// if("hello" in dict){
//     console.log(dict)
// }
function count(word: string) {
  let splitWord = word.split("");
  console.log(splitWord)
  let dict = new Map<string, number>()
  for (let i = 0; i < splitWord.length - 1; i++) {
    let currentWord = splitWord[i];
    if (dict.has(currentWord)) {
      dict.set(currentWord, +1)
    } else {
      dict.set(currentWord, 1)
    }
  }
  return dict;
}
// console.log(strTwo)
// console.log(count(strTwo))

const array: number[] = [1, 5, 5, 5, 5, 7, 8];
const targetNumber = 5;
function find(arr: number[], target: number): number[] {
  let indexs: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indexs.push(i)
      while (i++ < arr.length && arr[i++] === target) {
        indexs.push(i++)
      }
    }
  }
  if (indexs.length > 0) {
    return indexs
  }
  return [-1, -1]
}
console.log(find(array, targetNumber))

const testBaby = (w: string): string => {
  return "hello" + w
}
console.log(testBaby("world"))
