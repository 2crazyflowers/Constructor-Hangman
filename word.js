var Letter = require('./letter.js');
var word = "elephant";

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

var Word = function(word) {
	//An array of new Letter objects representing the letters of the underlying word
	this.word = word;
	this.lettersOfWord = []; 
	this.guessedLetterArray = [];
	
	//pushes each letter into the constructor in letter.js and creates an object with letter, true/false value and the methods...all the work done by the constructor and the object is saved on your computer for the life of that function (sort of)
	this.getLetters = function(word) {
		for (i = 0; i < currentWord.length; i++) {
			//pushes each letter of word into an array of new letter objects called lettersOfWord
			//word.charAt(i) looks at each character in a string of letters 
			var newLetter = new Letter(currentWord.charAt(i));
			console.log("New letter in Word is : " + this.newLetter+ "\n");
			this.lettersOfWord.push(newLetter);
			//had this.lettersOfWord.push(this.newLetter);
			//push the letter into the end of the string
		};
	}
	//adds all characters together to form a string
	//this does not work this way I think it should. I will have to do a prototype 
	// this.toString = function() {
	// 	for (i = 0; i < this.lettersOfWord.length; i++) {
	// 		var string = string + " " + this.lettersOfWord[i].showCharacter();
	// 	}
	// 	return string;
	// }
	//compare guess to letters in array
	this.compareGuess = function(guessedLetter) {
		for (i= 0; i < this.lettersOfWord.length; i++) {
			this.lettersOfWord[i].guessedCorrectCheck(guessedLetter);
			//compareChar
		}
	}
	//checks guess to see if entered already
	this.duplicateCheck = function(guessedLetter) {
		if (this.guessedLetterArray.indexOf(guessedLetter) === -1) {
			this.guessedLetterArray.push(guessedLetter);
			return true;
		}
		else {
			return false;
		}
	}
}

	
	// this.letterCheck = function (character) {
	// 	if (this.guessedCorrectlyCheck === letterOfWord)


	// };

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
Word.prototype.wordString = function() {
	string = "";
	for (i = 0; i < this.lettersOfWord.length; i++) {
		var string = string + " " + this.lettersOfWord[i].showCharacter();
	}
	return string;
}


// Word.prototype.checkGuess = function(guessedLetter) {
// 	for (i= 0; i < this.lettersOfWord.length; i++) {
// 		this.lettersOfWord[i].guessedCorrectCheck(guessedLetter);
// 		//compareChar
// 	}
// }
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js) and defines whether true or false
//this checks to see if the letter has already been chosen
//validGuess
// Word.prototype.guessCheck = function(guessedLetter) {
// 	if (this.guessedLetterArray.indexOf(guessedLetter) === -1) {
// 		this.guessedLetterArray.push(guessedLetter);
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

module.exports = Word;
//this is what the constructor creates for each letter put through, so it ends up as an object of 
// var newLetter = {
// 	character:"e", 
// 	guessCheck:false, 
// 	guessedLetter:"_" or display letter
// },
//	charcter:"l",
//  guessCheck:false,
//  guessedLetter:"_" or display letter;

