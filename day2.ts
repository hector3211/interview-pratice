const arrayThree = [1, 2, 3, 5, 6, 8, 9];
function func(array: number[]): number[] {
  let startP = 0;
  let endP = array.length - 1;
  let sqList = new Array(array.length);
  for (let i = endP; i > -1; i--) {
    let start = Math.floor(array[startP] ** 2);
    let end = Math.floor(array[endP] ** 2);
    if (end > start) {
      sqList[i] = end;
      endP--;
    } else {
      sqList[i] = start;
      startP++;
    }
  }
  return sqList;
}
// console.log(func(array))

const competition = [
  ["Bulls", "Eagles"],
  ["Bulls", "Bears"],
  ["Bulls", "Monkeys"],
  ["Eagles", "Bears"],
  ["Eagles", "Monkeys"],
  ["Bears", "Monkeys"],
];
const winningList = [1, 1, 1, 1, 1, 1];
interface Dictionary {
  [name: string]: any;
  [score: number]: any;
}
function homeAway(comp: string[][], results: number[]): string {
  let winner: Dictionary = { name: "", score: -Infinity };
  let scoreBoard: Record<string, number> = {};
  for (let i = 0; i < results.length; i++) {
    let winnerIdx = results[i] === 0 ? 1 : 0;
    let currentWinner = comp[i][winnerIdx];
    if (currentWinner in scoreBoard) {
      scoreBoard[currentWinner] += 3;
    } else {
      scoreBoard[currentWinner] = 3;
    }
    if (winner.score < scoreBoard[currentWinner]) {
      winner.name = currentWinner;
      winner.score = scoreBoard[currentWinner];
    }
  }
  console.log(scoreBoard);
  console.log(winner);
  return winner.name;
}
homeAway(competition, winningList);
