let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}
console.log(generateTarget()); //test function
const compareGuesses = function(userGuess, computerGuess, targetNumberGuess) {
    if (Mathh.abs(targetNumberGuess-userGuess) < Math.abs(targetNumberGuess - computerScore)){
        return true;
    }
    else if (Math.abs(targetNumberGuess - userGuess) > Math.abs(targetNumberGuess - computerGuess)) {
        return false;
    }   
    else {
        return true;
    }
}
const theWinner = () => {
    if (compareGuesses === true){
        return "human";
    }
    else {
        return "computer";
    }   
}
const updateScore = theWinner => {
    if (theWinner === "human") {
    humanScore += 1;
    }
    if (theWinner === "computer") {
    computerScore += 1;
    }
}
const advanceRound = () => {
    currentRoundNumber += 1;
}
//test code
updateScore("human");
console.log(humanScore);
updateScore("human");
console.log(humanScore);
