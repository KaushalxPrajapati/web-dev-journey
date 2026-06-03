let max = prompt("Enter a number of your choice");
let random = Math.floor(Math.random() * max) + 1;

while (true) {
  let guess = prompt("Now guess the number or type 'quit' to exit the game");

  if (guess === "quit") {
    console.log("You quit the game!");
    console.log("The random number was:", random);
    break;
  }

  if (guess == random) {
    console.log(
      "🎉 Congratulations! You guessed it right. The number was:",
      random
    );
    break;
  } else if (guess < random) {
    alert("Hint: Your guess was smaller!");
  } else if (guess > random) {
    alert("Hint: Your guess was bigger!");
  }
}
