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
const newPointScorer = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
}

let simpleScorer = function(word){
	let letterPoints = "";
  let score = 0;
  for (let j = 0; j < word.length; j++) {
    letterPoints+= `Points for '${word[j]}': ${simpleScore}\n`;
    score = Number(score) + Number(pointValue);
		 }console.log(`Score for ${word}: ${score}`);
	return letterPoints;
    
	  }
let vowelBonusScorer = function(word){
	let letterPoints = "";
  let score = 0;
  for (let k = 0; k < word.length; k++) {
  
    for (const vowel in word) {
      
      if ((oldPointStructure[1].slice(0,5)).includes(word[vowel])){
          
          letterPoints+= `Points for '${word[vowel]}': ${vowelBonusScore}\n`;
          score = Number(score) + Number(pointValue);
        
        }else{
          letterPoints+= `Points for '${word[vowel]}': ${simpleScore}\n`;
          score = Number(score) + Number(pointValue);
        }

      }console.log(`Score for ${word}: ${score}`);
	return letterPoints;
  }
  }

let oldScrabbleScorer = function(word) {
	let letterPoints = "";
  let score = 0;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (newPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      score = Number(score) + Number(pointValue);
		 }
 
	  }
	} console.log(`Score for ${word}: ${score}`);
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

let scrabbleScore;

const scoringAlgorithms = [{name:'Simple Score', description:'Each letter is worth 1 point.\n', scorerFunction:simpleScorer},

{name:'Bonus Vowels' ,description:'Vowels are 3 pts, consonants are 1 pt.' , scorerFunction:vowelBonusScorer},

{name:'Scrabble' ,description:'The traditional scoring algorithm.' , scorerFunction:oldScrabbleScorer}];


function scorerPrompt(word) {
  scorerPick = input.question(`Your word is ${word}.\nEnter a scorer to score your word:\n0 - for Simple Scorer\n1 - for Vowel Bonus Scorer\n2 - for Classic Scrabble\n`);
  
  return scoringAlgorithms[scorerPick];
}

  

function transform() {};

let newPointStructure;

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

