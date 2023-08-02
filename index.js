/* Dice Game (index.js) */

// Creating the function
function playDiceGame() {

    // Creating a random number between 1-6 for player1.
    var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1 * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;

    document.querySelector(".img1").setAttribute("src", "./assets/dice" + randomNumber1 + ".png");

    // Creating a random number between 1-6 for player2.
    var randomNumber2 = Math.random();
    randomNumber2 = randomNumber2 * 6;
    randomNumber2 = Math.floor(randomNumber2) + 1;

    document.querySelector(".img2").setAttribute("src", "./assets/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.getElementById("heading").textContent = "Player 1 Wins!"
    }
    else if (randomNumber2 > randomNumber1) {
        document.getElementById("heading").textContent = "Player 2 Wins!";
    }
    else {
        // randomNumber1 === randomNumber2
        document.getElementById("heading").textContent = "Draw!";
    }

}