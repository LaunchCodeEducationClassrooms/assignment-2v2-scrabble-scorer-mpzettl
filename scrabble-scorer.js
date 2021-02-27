// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const  oldPointStructure= {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  
  //word = "three";
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
//function simpleScorer: Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point.
function simpleScorer(word){
  //word = "one";
  //word = word.toUpperCase();
	let letterPoints = "";
  for (let j = 0; j < word.length; j++) {
    letterPoints+= `Points for '${word[j]}': ${simpleScore}\n`;

		 }console.log(letterPoints);
	return letterPoints;
    
	  }
//vowelBonusScorer: Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
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

//Make each scoring algorithm case insensitive, meaning that they should all ignore case when assigning points.

function initialPrompt() {
   
   console.log("Let's play some scrabble! ");
   
   word = input.question("Enter a word to score: \n").toUpperCase();
  console.log(word);
  return word; 
};

let simpleScore = 1;

let vowelBonusScore = 3;

let scrabbleScore;

const scoringAlgorithms = {
  0: ['Simple Score\n','Each letter is worth 1 point.\n', simpleScorer()], 

  1:['Bonus Vowels','Vowels are 3 pts, consonants are 1 pt.', vowelBonusScorer()],

  2: ['Scrabble', 'The traditional scoring algorithm.', oldScrabbleScorer()]
};
   
function scorerPrompt(name, description, scorerFunction) {
//console.log(word);
scorerPick = input.question
("Enter a scorer to score your word: \n");

if (scorerPick == 0){
  simpleScorer(this.word);
  console.log(scoringAlgorithms[0].slice(0,1).toString(), scoringAlgorithms[0].slice(1,2).toString(),scoringAlgorithms[0].slice(2,3).toString());
  //console.log(`Algorithm name: ${scoringAlgorithms[0].slice(0,1)}`);

  //console.log(`scorerFunction result: ${scoringAlgorithms[0].slice(2,2).scorerFunction(this.word)}`);

  }else if (scorerPick == 1){
  vowelBonusScorer(this.word);
  //console.log(`Algorithm name: ${scoringAlgorithms[1].slice(0,1)}`);
  console.log(scoringAlgorithms[1].slice(0,1).toString(), scoringAlgorithms[1].slice(1,2).toString(),scoringAlgorithms[1].slice(2,3).toString());
  //console.log(`scorerFunction result: ${scoringAlgorithms[1].slice(2,2).scorerFunction(this.word)}`);

  }else if (scorerPick == 2){
  oldScrabbleScorer(this.word);
  //console.log(`Algorithm name: ${scoringAlgorithms[2].slice(0,1)}`);
  console.log(scoringAlgorithms[2].slice(0,1).toString(), scoringAlgorithms[2].slice(1,2).toString(),scoringAlgorithms[2].slice(2,3).toString());
  //console.log(`scorerFunction result: ${scoringAlgorithms[2].slice(2,2).scorerFunction(this.word)}`);

  }else{
  console.log(`Try again: ${runProgram()}`);
}
}

function transform() {};

let newPointStructure;

function runProgram() {
  initialPrompt();
  console.log(word);
  console.log(this.word);
  //console.log(scoringAlgorithms[0]);
  //console.log(oldPointStructure[1].slice(0,5).map(function() {
 // return word, letterPoints;
//}));console.log(word);
  //scorerPrompt(this.word);
  simpleScorer(this.word);
  //console.log(this.word);
  vowelBonusScorer(this.word);
  oldScrabbleScorer(this.word);
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

