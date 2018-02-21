var inquirer = require('inquirer');
var Word = require('./word.js');

var guessesRemaining = 10;
var wins = 0;
var losses = 0;
var guessedLetterArray = [];
var currentWord;
var status = "";
var word;

// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

function startGame(){
  inquirer
  .prompt([
    { 
      type: "confirm",
      message: "Do you want to a game of hangman?",
      name: "startGame"
    }
  ])
  .then(function(user) {
  //
    if (user.startGame === true) {
      //pick random word from word list
      //uses Word constructor to store it
      //then the constructor in letter.js will log the underscores
      console.log("Let's start the game!");
      //process current word to screen

      //+++++++++++++++++++++++++++ Issue ++++++++++++++++++++++++++
      //currentWord.toString() is coming up as undefined, not sure why
      console.log(currentWord.wordString() + "\n");
      continueGame();
    }

    else {
      console.log("Sorry to hear that, it would have been fun!");
    }
  });
}

function continueGame() {
  //randomly picks word from an array of words using mathfloor
  //do I want there to be a hint with the word, in which case it would be an object with words and hints
  //once word is chosen push it to word.js to break it into letters through the constructor and post to console log as underscore or letter
  //post hint
  //call inquirer to prompt user
  //takes each guess and converts to underscore if in caps pushes to guessCheck
  //posts incorrect guesses to screen
  //some way to ???
  inquirer
    .prompt([

    { 
      type: "input",
      message: "Guess a letter",
      name: "letterGuessed",
      validate: function(input) {
        var letters = /^[A-Za-z]+$/;
        if(input.match(letters)) {
          console.log('Your letter was: ' + input);
          return true;
        }
        else {
          console.log('Please input alphabet characters only');
          return false;
        }
      }
    }
  ]).then(function(guess) {
    //guess.letter = guess.letter.toLowerCase();
    if (currentWord.duplicateCheck(guess.letterGuessed)){
      currentWord.toString(guess.letterGuessed);
      guessesRemaining--
      console.log("==============================================");
      console.log("");
      console.log("Guessed letters: " + guessedLetterArray+ "\n" + "Guesses remaining: " + guessesRemaining + "\n" + "Word to guess: "+ currentWord);//underscore and/or letters
      console.log("");
      console.log("==============================================");
    }
  })
}

function checkEndGame() {
  //check to see if there are any remaining underscores
  //check to see if there are any guessesRemaining
  if (showCharacter === "_" && guessesRemaining > 0) {
  //if both are true then continueGame()
    continueGame();
  }
  //if there are no more guesses
  if (guessesRemaining = 0) {
    losses++;
    status = "You are out of guesses!";
    postEndGame();
  }

  //if there are no more dashes
  if (showCharacter !== "_") {
    wins++;
    status = "You guessed correctly, you win!";
    postEndGame();
  }
  else {
  //if there are not post win or loss
  }
}

function postEndGame(){
  console.log("==============================================");
    console.log("Game over\n");
    console.log(status + "\n");
    console.log("The word to guess was: " + currentWord);
    console.log("Your games lost: " + losses + "\n");
    console.log("Your games won: " + wins + "\n");
    console.log("==============================================");

    //do you want to play again?
}

startGame();