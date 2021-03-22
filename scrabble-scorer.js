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
	let letterPoints = "";
  let score = 0;
  for (let j = 0; j < word.length; j++) {
    letterPoints+= `Points for '${word[j]}': ${simpleScore}\n`;
    score = Number(score) + Number(simpleScore);
		 }console.log(`Score for ${word}: ${score}`);
     letterPoints = Number(letterPoints);
	return letterPoints;
    
	  }
function vowelBonusScorer(word){
	let letterPoints = "";
  let score = 0;
  for (let k = 0; k < word.length; k++) {
  
    for (const letter in word) {
      
      if ((oldPointStructure[1].slice(0,5)).includes(word[letter])){
          
          //letterPoints+= `Points for '${word[letter]}': ${vowelBonusScore}\n`;
          score = Number(score) + vowelBonusScore;
        
        }else{
          //letterPoints+= `Points for '${word[letter]}': ${simpleScore}\n`;
          score = Number(score) + Number(simpleScore);
        }

      }console.log(`Score for ${word}: ${score}`);
      letterPoints = Number(letterPoints);
	return letterPoints;
  }
  }

function oldScrabbleScorer(word) {
	let letterPoints = "";
  let score = 0;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      score = Number(score) + Number(pointValue);
		 }
 
	  }
	} console.log(`Score for ${word}: ${score}`);
  letterPoints = Number(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   word = input.question("Enter a word: \n");
   word = word.toUpperCase();
   return word;
};

let simpleScore = 1;

let vowelBonusScore = 3;

let scrabbleScore = function(word){
  let letterPoints = "";
  
  
  let score = 0;
	for (let i = 0; i < word.length; i++) {
    
	  for (const letterKey in newPointStructure) {
      let letterScore = newPointStructure[letterKey];
		 if (letterKey.includes(word[i].toLowerCase())) {
			//letterPoints += `Points for '${word[i]}': ${letterScore}\n`
      score = Number(score) + Number(letterScore);
		 }
 
	  }
	} console.log(`Score for ${word}: ${score}`);
  letterPoints = Number(letterPoints);
	return letterPoints;
 };

const scoringAlgorithms = [{name: 'Simple Score', description: 'Each letter is worth 1 point.', scorerFunction: simpleScorer},

{name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scorerFunction: vowelBonusScorer},

{name: 'Scrabble', description: 'The traditional scoring algorithm.', scorerFunction: scrabbleScore}];


function scorerPrompt(word) {
  scorerPick = input.question(`Your word is ${word}.\nEnter a scorer to score your word:\n0 - for Simple Scorer\n1 - for Vowel Bonus Scorer\n2 - for Classic Scrabble\n`);
  
  return scoringAlgorithms[scorerPick];
}

  

function transform(oldPointStructure) {
  
  let newStructure ={};
    
    for(oldKey in oldPointStructure){//a
      
      for (let i=0;i<oldPointStructure[oldKey].length;i++){
        
      let oldValue = oldPointStructure[oldKey][i].toLowerCase();
      newStructure[oldValue]= oldKey;
      
      
      }
      
  
    }
    return newStructure;
};

let newPointStructure = transform(oldPointStructure);


function runProgram() {
   initialPrompt();
   scorerPrompt(word);

   console.log(`You chose: ${scoringAlgorithms[scorerPick].name}\n`);
   console.log(scoringAlgorithms[scorerPick].description,"\n");

   console.log(scoringAlgorithms[scorerPick].scorerFunction(word));
  
   
   
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

