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

const choiceContainer = document.querySelector(".container");
const resultTitle = document.querySelector(".result");

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice(event) {
  let input = event.target.classList.value;
  return input;
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

function playRound(event) {
  const computerChoice = getComputerChoice();
  const playerChoice = getHumanChoice(event);

  if (!playerChoice) return; // Stop the round if the input is invalid

  const roundResult = evaluateResult(computerChoice, playerChoice);

  if (roundResult === "You win!") {
    playerScore++;
  } else if (roundResult === "You lose") {
    computerScore++;
  }

  resultTitle.textContent = roundResult;
  rounds = playerScore + computerScore;
}

choiceContainer.addEventListener("click", (click) => {
  playRound(click);
});
