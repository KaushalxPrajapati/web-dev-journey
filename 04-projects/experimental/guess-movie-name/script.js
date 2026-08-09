// Step 1: Initialize the data and set the target variable
// We define the array of movies and prompt the user. Using .join(', ') formats the array cleanly for the UI.
const moviesArr = ['Inception', 'Titanic', 'Gladiator', 'Avatar', 'Interstellar', 'Jaws', 'Alien', 'Rocky', 'Gravity', 'Psycho'];
const favoriteMovie = prompt(`Enter your favorite movie from the list: \n${moviesArr.join(', ')}`);

// Step 2: Initialize the state variable for user input
// We start with an empty string so the while-loop condition has a baseline to evaluate on the first iteration.
let guessedMovie = '';

// Step 3: Execute the core game loop for continuous evaluation
// The loop runs continuously until the guess matches the target.
// Note: We use optional chaining (?.) on favoriteMovie to prevent a fatal Type Error if the user clicked "Cancel" on the first prompt.
while (guessedMovie.toLowerCase() !== favoriteMovie?.toLowerCase()) {
    // Request input from the user
    guessedMovie = prompt('Now guess my favorite movie:');

    // Handle early exit: If the user clicks "Cancel", the prompt returns null. We break the loop to stop execution securely.
    if (guessedMovie === null) {
        alert('Game cancelled.');
        break;
    }

    // Conditional feedback: If the current iteration's guess is incorrect, notify the user.
    if (guessedMovie.toLowerCase() !== favoriteMovie.toLowerCase()) {
        alert('Wrong guess! Try again.');
    }
}

// Step 4: Verify the final win condition and execute success logic
// We ensure guessedMovie holds a value (was not cancelled) and matches the target before declaring victory.
if (guessedMovie && guessedMovie.toLowerCase() === favoriteMovie?.toLowerCase()) {
    alert('Congratulations! You guessed it right.');
}
