
var randomNumber, maxAttempts, attemptsLeft, difficulty, userGuess;

document.getElementById("startBtn").onclick = function() {
    difficulty = parseInt(document.getElementById("difficulty").value);
    randomNumber = Math.floor(Math.random() * difficulty) + 1;
    maxAttempts = 3;
    attemptsLeft = maxAttempts;
    document.getElementById("feedback").textContent = '';
    document.getElementById("attempts").textContent = 'Attempts left: ' + attemptsLeft;
    document.getElementById("gameSection").style.display = 'block';
    document.getElementById("tryAgainBtn").style.display = 'none';
};

document.getElementById("guessBtn").onclick = function() {
    userGuess = parseInt(document.getElementById("guessInput").value);
    if (!userGuess || userGuess < 1 || userGuess > difficulty) {
        document.getElementById("feedback").textContent = 'Please enter a valid number within the range!';
        return;
    }

    attemptsLeft--;
    if (userGuess === randomNumber) {
        document.getElementById("feedback").textContent = 'Congratulations! You guessed it right!';
        endGame();
    } else if (attemptsLeft > 0) {
        var diff = Math.abs(randomNumber - userGuess);
        if (diff <= 2) {
            document.getElementById("feedback").textContent = 'Very close!';
        } else if (diff <= 5) {
            document.getElementById("feedback").textContent = 'Close!';
        } else if (userGuess > randomNumber) {
            document.getElementById("feedback").textContent = 'Too high!';
        } else {
            document.getElementById("feedback").textContent = 'Too low!';
        }
        document.getElementById("attempts").textContent = 'Attempts left: ' + attemptsLeft;
    } else {
        document.getElementById("feedback").textContent = 'Game over! The correct number was ' + randomNumber + '.';
        endGame();
    }
};

function endGame() {
    document.getElementById("tryAgainBtn").style.display = 'block';
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("leaderboard").textContent += "\nPlayer 1: " + (maxAttempts - attemptsLeft) + " attempts";
}

document.getElementById("tryAgainBtn").onclick = function() {
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("gameSection").style.display = 'none';
    document.getElementById("guessInput").value = '';
    document.getElementById("feedback").textContent = '';
};
