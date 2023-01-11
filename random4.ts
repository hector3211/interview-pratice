const input = "555";

let sum = 0;
for (let i = 0; i < input.length; i++) {
  const currNum = Number(input[i]);
  sum += currNum;
}
console.log(sum);
