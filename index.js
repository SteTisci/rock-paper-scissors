// possible choices
const choices = ["rock", "paper", "scissors"];
// Possible outcomes for the player to win
const winningConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
let computerScore = 0;
let playerScore = 0;
let rounds = 0;

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function getHumanChoice() {
  let input = prompt(
    "What is your choice? Rock / Paper / Scissors"
  ).toLowerCase();

  if (choices.includes(input)) {
    return input;
  } else {
    alert("Input not valid! Please enter Rock, Paper or Scissors");
    return undefined;
  }
}

function evaluateResult(computerChoice, playerChoice) {
  if (winningConditions[playerChoice] === computerChoice) {
    return "You win!";
  } else if (playerChoice === computerChoice) {
    return "That's a draw";
  } else {
    return "You lose";
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
}

function playRound() {
  const computerChoice = getComputerChoice();
  const playerChoice = getHumanChoice();

  if (!playerChoice) return; // Stop the round if the input is invalid

  const roundResult = evaluateResult(computerChoice, playerChoice);

  if (roundResult === "You win!") {
    playerScore++;
  } else if (roundResult === "You lose") {
    computerScore++;
  }

  alert(
    `Computer => ${computerChoice}\nPlayer => ${playerChoice}\n\n${roundResult}\n\nSCORE\n\nComputer: ${computerScore}\nPlayer: ${playerScore}`
  );
  rounds = playerScore + computerScore;
}

function playGame() {
  // Alert for the start of the game
  alert(
    "\nROCK - PAPER - SCISSORS\n\nRules:\n- Best of five rounds\n- Who has the most point by the end wins!\n- Draws doesn't count"
  );

  do {
    while (rounds < 5 && playerScore < 3 && computerScore < 3) {
      playRound();
    }

    if (playerScore > computerScore) {
      alert("Congratulations! You win!");
    } else if (computerScore > playerScore) {
      alert("You lose! Better luck next time!");
    }

    resetScore();
  } while (confirm("do you want to play again?"));
}

playGame();
