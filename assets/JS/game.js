
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];


var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessleft-text");
var guessedLettersText = document.getElementById("guessed-letters");

// var playAgain = confirm("You Lost!! to play again press OK")

var computerGuess = choices[Math.floor(Math.random() * choices.length)];

document.onkeyup = function (event) {

  var userGuess = choices
  var userGuess = event.key;
  var userGuessLower = userGuess.toLowerCase();

  // var computerGuess = choices[Math.floor(Math.random() * choices.length)];

  guessedLetters.push(userGuess);

  if (choices.indexOf(userGuess)) {

    if (userGuess === computerGuess) {
      wins++;
    } else if (userGuess !== computerGuess) {
      guessesLeft--;
    }


    directionsText.textContent = "Choose again!!";
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    guessLeftText.textContent = "Guesses Left: " + guessesLeft;
    lossesText.textContent = "losses: " + losses;
    guessedLettersText.textContent = "Your guesses so far:" + guessedLetters;




  };

  if (guessesLeft < 0) {
    losses++;
    var playAgain = confirm("You Lost!! to play again press OK");
    if (playAgain == true) {
      // wins = 0;
      guessesLeft = 9;
      guessedLetters = [];
      computerGuess = choices[Math.floor(Math.random() * choices.length)];

    }


  }

};