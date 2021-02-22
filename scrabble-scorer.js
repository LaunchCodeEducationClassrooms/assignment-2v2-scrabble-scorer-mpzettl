// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  
  
  word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
    
	  }
	}console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
//function simpleScorer: Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point.
function simpleScorer(word){
  word = word.toUpperCase();
	let letterPoints = "";
  for (let i = 0; i < word.length; i++) {
    letterPoints+= `Points for '${word[i]}': ${1}\n`;
	  /*for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`*/
		 }console.log(letterPoints);
	return letterPoints;
    
	  }
	
 

//vowelBonusScorer: Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
function vowelBonusScorer(word){
  word = word.toUpperCase();
	let letterPoints = "";

  for (const pointValue in vowelBonusScorer) {
  if (vowelBonusScorer[pointValue].includes(word[i])){
  
  for (let i = 0; i < word.length; i++) {
    if (pointvowelBonusScorer[pointValue].includes('A')){
    letterpoints+= `Points for '${word[i]}': ${vowelBonusScore}\n`;
    }else{
    letterPoints+= `Points for '${word[i]}': ${simpleScore}\n`;
  }
  
    //letterPoints += `Points for '${word[i]}': ${pointValue}
  
	  /*for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`*/
		 }console.log(letterPoints);
	return letterPoints;
    
	  }
  }
//Make each scoring algorithm case insensitive, meaning that they should all ignore case when assigning points.

function initialPrompt() {
   
   console.log("Let's play some scrabble! ");
   
   wordToScore = input.question("Enter a word to score: \n");

  return wordToScore; 
};

let simpleScore = 1;

let vowelBonusScore = 3;

let scrabbleScore;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   prompt = initialPrompt(this.word)
   //oldScrabbleScorer(prompt);
   //simpleScorer(prompt);
   vowelBonusScorer(prompt);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

