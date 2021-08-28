const getUserChoice = userInput  => {
    userInput = userInput.toLowerCase();
    if ( userInput === "rock" || userInput === "paper" || userInput === "scissors"){
      return userInput;
    }
    else {
      console.log("Error Message!");
    }
    
  }
  console.log(getUserChoice("paper"));
  const getComputerChoice = function() {
     Math.floor(Math.random() * 2) ;
    if ( Math.floor(Math.random() * 2) === 0) {
      return "rock";
    }
    else if ( Math.floor(Math.random() * 2) === 1){
      return "paper";
    }
    else {
      return "scissors";
    }
  }
  console.log(getComputerChoice());
  const determineWinner = function(userChoice, computerChoice) {
    if (userChoice === computerChoice){
      return ("The game was tie");
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper"){
        return ("You loose");
      }
      else {
        return ("You loose");
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return ("You won");
      }
      else {
        return ("You loose");
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return ("You loose");
      }
      else {
        return ("You won");
      }
    }
  }
    console.log(determineWinner("paper", "scissors"));
    const playGame = () => {
      let  userChoice = getUserChoice("paper");
      let computerChoice = getComputerChoice();
      console.log ("Your threw " + userChoice);
      console.log("Computer threw "+ computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();
      
    
  