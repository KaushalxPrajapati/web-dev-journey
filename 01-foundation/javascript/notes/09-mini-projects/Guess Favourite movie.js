// Step 1: Store your favorite movie in a variable (constant means it can’t change)
const favoriteMovie = "Inception";  

// Step 2: Create an empty variable to store the user's guess
let guessedMovie = "";

// Step 3: Repeat (loop) until the user's guess matches the favorite movie
while (guessedMovie.toLowerCase() !== favoriteMovie.toLowerCase()) {

    // Ask the user to guess the movie name
    guessedMovie = prompt("Guess my favorite movie:");

    // If the user clicks "Cancel", the prompt returns null → stop the game
    if (guessedMovie === null) {
        alert("Game cancelled.");
        break; // Exit the loop
    }

    // If the guess is wrong, show this message
    if (guessedMovie.toLowerCase() !== favoriteMovie.toLowerCase()) {
        alert("Wrong guess! Try again.");
    }
}

// Step 4: If the user guessed correctly, show a success message
if (guessedMovie && guessedMovie.toLowerCase() === favoriteMovie.toLowerCase()) {
    alert("Congratulations! You guessed it right.");
}
