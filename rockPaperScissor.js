const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    switch (userInput) {
      case "rock":
        console.log("You selected Rock\n");
        return "rock";
      case "paper":
        console.log("You selected Paper\n");
        return "paper";
      case "scissors":
        console.log("You selected Scissors\n");
        return "scissors";
      case "bomb":
        console.log("You have used the bomb cheat-code!");
        return "bomb";
      default:
        return console.log("Invalid Input");
    }
  };

  const getComputerChoice = () => {
    let result = Math.floor(Math.random() * 3);
    switch (result) {
      case 0:
        console.log("The computer selected Rock\n");
        return "rock";
      case 1:
        console.log("The computer selected Paper\n");
        return "paper";
      case 2:
        console.log("The computer selected Scissors");
        return "scissors";
      default:
        return console.log("The computer is broken. Please try again.\n");
    }
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
      return console.log("You little cheater!");
    } else if (userChoice === computerChoice) {
      return console.log("The game was a tie");
    } else if (userChoice === "rock") {
      switch (computerChoice) {
        case "paper":
          return console.log("The computer has won");
        case "scissors":
          return console.log("You have won!");
      }
    } else if (userChoice === "scissors") {
      switch (computerChoice) {
        case "rock":
          return console.log("The Computer has won");
        case "paper":
          return console.log("You have won!");
      }
    } else if (userChoice === "paper") {
      switch (computerChoice) {
        case "scissors":
          return console.log("The Computer has won");
        case "rock":
          return console.log("You have won!");
      }
    } else {
      console.log("Invalid user choice");
    }
  };

  const playGame = () => {
    let userChoice = getUserChoice("bomb");
    let computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
  };

  playGame();
