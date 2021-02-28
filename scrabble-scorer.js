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
function simpleScorer(word){
  //word = "one";
  //word = word.toUpperCase();
	let letterPoints = "";
  for (let j = 0; j < word.length; j++) {
    letterPoints+= `Points for '${word[j]}': ${simpleScore}\n`;

		 }console.log(letterPoints);
	return letterPoints;
    
	  }
function vowelBonusScorer(word){
  //word = "two";
  //word = word.toUpperCase();
	letterPoints = "";
  
  for (let k = 0; k < word.length; k++) {
  
    for (const vowel in word) {
      
      if ((oldPointStructure[1].slice(0,5)).includes(word[vowel])){
          
          letterPoints+= `Points for '${word[vowel]}': ${vowelBonusScore}\n`;
        
        }else{
          letterPoints+= `Points for '${word[vowel]}': ${simpleScore}\n`;
        }

      }console.log(letterPoints);
	return letterPoints;
  }
  }

function oldScrabbleScorer(word) {
	//word = word.toUpperCase();
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

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   initialPrompt = input.question("Enter a word: \n");
   initialPrompt = initialPrompt.toUpperCase();
   return initialPrompt;
};

let simpleScore = 1;

let vowelBonusScore = 3;

let scrabbleScore;

const scoringAlgorithms = [/*[name, description, scorerFunction]*/[simpleScorer], [vowelBonusScorer], [oldScrabbleScorer]];

function scorerPrompt(word) {
  scorerPick = input.question
(`Your word is ${word}.\nEnter a scorer to score your word:\n1 for Simple Scorer\n2 for Vowel Bonus Scorer\n3 for Classic Scrabble\n`);

  if (scorerPick == 1){
  simpleScorer(word);
}else if(scorerPick ==2){
  vowelBonusScorer(word);
}else if(scorerPick ==3){
  oldScrabbleScorer(word);
}else{
  console.log("error");
}
}
function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt(initialPrompt);
   //simpleScorer(prompt);
   //vowelBonusScorer(prompt);
   //oldScrabbleScorer(prompt);
   
   
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

