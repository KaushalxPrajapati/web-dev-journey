let array = ["JavaScript", "is", "fun"];

function concatenateStrings(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result = result + array[i] + " ";
  }
  return result;
}

console.log(concatenateStrings(array));
