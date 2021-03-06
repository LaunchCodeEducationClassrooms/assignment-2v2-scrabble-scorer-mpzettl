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
	let letterPoints = "";
  let score = 0;
  if(word !== undefined){
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			
      letterpoints = Number(score) + Number(pointValue);
		 }
 
	  }
	} 
	return letterPoints;// oldScrabbleScorer(word), 
 }}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   word = input.question("Enter a word: \n");
   word = word.toUpperCase();
   return word;
};

function simpleScore(word){
	
  let score = 0;
  if (word ==="") {
          
          return score;
        }
  else if(word !== undefined){
  for (let j = 0; j < word.length; j++) {
    
    score = Number(score) + 1;
		 
     
}return score;
	 
    
 } };
function vowelBonusScore(word){
	word = word.toUpperCase();
  let score = 0;
  if (word ==="") {
          
    return score;

  } else if(word !== undefined){
  
  for (let k = 0; k < word.length; k++) {
  
    for (const letter in word) {
      
      if ((oldPointStructure[1].slice(0,5)).includes(word[letter])){
     
          score += 3;;
          
        }else{
          
          score += 1;   
        }
      }
      
	return score;
  }
}
};

let scrabbleScore = function(word){
  
  let score = 0;
  if(word !== undefined){
	for (let i = 0; i < word.length; i++) {
    
	  for (const letterKey in newPointStructure){
      let letterScore = newPointStructure[letterKey];
		  if (letterKey.includes(word[i].toLowerCase())) {
			
        score = Number(score) + Number(letterScore);
		  }
	  }
	} return score;
 }
 };

const scoringAlgorithms = [Object({ name: 'Simple Score', description: 'Each letter is worth 1 point.', scoringFunction:simpleScore  }),

Object({ name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scoringFunction:vowelBonusScore }),

Object({ name: 'Scrabble', description: 'The traditional scoring algorithm.', scoringFunction:scrabbleScore } )];

function scorerPrompt(word) {
  scorerPick = input.question(`Your word is ${word}.\nEnter a scorer to score your word:\n0 - for Simple Score\n1 - for Vowel Bonus Score\n2 - for Classic Scrabble\n`);
  
  console.log(`You chose: ${scoringAlgorithms[scorerPick].name}\n`);
   console.log(scoringAlgorithms[scorerPick].description,"\n");
  console.log(`Score for ${word}: ${scoringAlgorithms[scorerPick].scoringFunction(word)}`)
  return input;
}

function transform(oldPointStructure) {
  
  let newStructure ={};
    
    for(oldKey in oldPointStructure){
      
      for (let i=0;i<oldPointStructure[oldKey].length;i++){
        
      let oldValue = oldPointStructure[oldKey][i].toLowerCase();
      newStructure[oldValue]= Number(oldKey);
      
      }

    }
    return newStructure;
};

let newPointStructure = transform(oldPointStructure);


function runProgram() {
   initialPrompt();
   scorerPrompt(word);

   

   //console.log(scoringAlgorithms[scorerPick].scorerFunction(word));
  //console.log(`Score for ${word}: ${scoringAlgorithms[scorerPick].scoringFunction(word)}`)
   
   
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

