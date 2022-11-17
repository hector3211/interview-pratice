// red shirt vs blue shirts
const redShirts = [3, 5, 6, 8, 2, 1];
const blueShirts = [2, 4, 7, 5, 1, 6];
function photo(red: number[], blue: number[]): boolean {
  red.sort().reverse();
  blue.sort().reverse();
  let canTakePhoto = false;
  // we declare our back row and front row ahead of time
  let backRow = red[0] > blue[0] ? red : blue;
  let frontRow = red[0] > blue[0] ? blue : red;
  for (let i = 0; i < red.length; i++) {
    if (backRow[i] > frontRow[i]) {
      canTakePhoto = true;
    } else if (backRow[i] === frontRow[i]) {
      canTakePhoto = false;
    } else {
      canTakePhoto = false;
    }
  }
  return canTakePhoto;
}
console.log(photo(redShirts, blueShirts));

// tandem bicycle
const redBikes = [5, 5, 3, 9, 2];
const blueBikes = [3, 6, 7, 2, 1];
const fast = true;
function tandem(red: number[], blue: number[], fastest: boolean): number {
  if (fastest) {
    let maxSpeed = 0;
    red.sort().reverse();
    blue.sort();
    for (let i = 0; i < red.length; i++) {
      if (red[i] > blue[i]) {
        maxSpeed += red[i];
      } else if (blue[i] > red[i]) {
        maxSpeed += blue[i];
      }
    }
    return maxSpeed;
  } else {
    let minSpeed = 0;
    red.sort();
    blue.sort();
    for (let i = 0; i < red.length; i++) {
      if (red[i] > blue[i]) {
        minSpeed += red[i];
      } else if (blue[i] > red[i]) {
        minSpeed += blue[i];
      }
    }
    return minSpeed;
  }
}
console.log(tandem(redBikes, blueBikes, fast));
