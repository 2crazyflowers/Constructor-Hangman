var Word = require('./letter.js');
var word = "elephant";
// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

var Word = function(word) {
	// done: An array of new Letter objects representing the letters of the underlying word
	// this.newLetterObjects = [],
	// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	//pushes each letter into the constructor in letter.js and creates an object with letter, true/false value and the methods...all the work done by the constructor and the object is saved on your computer for the life of that function (sort of)
	this.letterToString = function(word) {
		for (i=0; i < word.length; i++) {
			var newLetter = new Letter(word.charAt(i));
			console.log(newLetter);
			this.character.push(newLetter);
			console.log(newLetter);
			//look at each character in a string of letters word.charAt(i)
			//push the letter into the end of the string
		}
	// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js) and defines whether true or false
	this.guessedLetter = function(argument) {
		if (guessedCheck === letterInWord)

	}
}

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

