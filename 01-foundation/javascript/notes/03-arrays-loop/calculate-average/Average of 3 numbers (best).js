//1nd Method to Do:
function avg() {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    temp = Number(prompt(`Enter ${i + 1}st No.`));
    sum = sum + temp;
  }
  return sum / 3;
}

console.log(avg());


//2nd Method to Do:
function avg() {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum = sum + Number(prompt(`Enter ${i + 1}st No.`));
  }
  return sum / 3;
}

console.log(avg());
