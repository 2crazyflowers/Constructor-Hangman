# Constructor-Hangman

### Project Description
A hangman game that is played through Node.js on the command line that uses Inquirer NPM. Constructors are used in this game. The word to guess is displayed with dashes and the user is prompted to guess letters of the word until they fill all the dashes with letters. Then they can choose to play again and their win/loss count is tallied.

### Issues
I was able to get the letter.js file to work by itself. I worked on the word.js and the index.js file. I was able to get the inquirer to prompt user if they would like to play and for their response to illicet a message depending on the answer given. The word dashes are not displayed to the user as they should though. The user is prompted to guess a letter and that does take only letters, however, then they get a unpromised error that I cannot figure out.

### Getting Started
You will need to copy the files to your local computer. You will then need to go to the folder command line and enter npm init, then npm install to get the inquirer npm package which you will need to use the program. Once that is done, using the command line in the Constructor-Hangman file, type node index.js to start the game. **Please note that you will need to use ctrl c to exit node when the program throws an error.**

### Prerequisites
NPM Inquirer will need to be installed into the folder that you create for the program.

### Built With
JavaScript, Node.js, NPM Inquirer

### Author
Sara Bracewell

### Acknowledgements
I would like to thank one of my coding partners Craig for his assistance in helping me to figure out how to make the Word constructor and what it was going to do. I would like to thank the Sunday coding crew, I always have fun and usually get a chance to explain something to someone else from time to time, it is not always the other way around. And finally to Phill who pushes me to do more. Thank you!! 

### Instructions
The completed game should meet the following criteria:

The completed game should be able to receive user input using the inquirer or prompt npm packages.

Your solution should have, at minimum, three files:
1. Letter.js: 
Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
	* A string value to store the underlying character for the letter
	* A boolean value that stores whether that letter has been guessed yet
	* A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
	* A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
	* Letter.js should not require any other files.
	* HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js

1. Word.js:
Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
	* An array of new Letter objects representing the letters of the underlying word
	* A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	* A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
	* Word.js should only require Letter.js
	* HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

1. index.js: 
The file containing the logic for the course of the game, which depends on Word.js and:
	* Randomly selects a word and uses the Word constructor to store it
	Prompts the user for each guess and keeps track of the user's remaining guesses

### Notes
Since this assignment is a command-line application, you don't need to deploy it anywhere. You will, however, be required to upload it to Github.
Remember to include a package.json file containing your project dependencies in your Github repo!

### Minimum Requirements
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

### Create a README.md
Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:
* [About READMEs](https://help.github.com/articles/about-readmes/)
* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

### Add To Your Portfolio
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

### One More Thing
If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

Good Luck!

