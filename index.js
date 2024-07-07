const choiceContainer = document.querySelector(".choices");
const resultDisplay = document.querySelector(".result");
const scoreDisplay = document.querySelector(".score");
const roundDisplay = document.querySelector(".rounds");

let computerScore = 0;
let playerScore = 0;
let rounds = 0;

// possible choices
const choices = ["rock", "paper", "scissors"];

// Possible outcomes for the player to win
const winningConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

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

function showGameInfo(roundResult, rounds, playerScore, computerScore) {
  resultDisplay.textContent = roundResult;
  scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  roundDisplay.textContent = rounds;
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
  rounds = playerScore + computerScore;
  showGameInfo(roundResult, rounds, playerScore, computerScore);
}

function playGame() {
  choiceContainer.addEventListener("click", (click) => {
    if (rounds < 5) {
      playRound(click);
    }
    if (rounds === 5) {
      resultDisplay.textContent =
        playerScore > computerScore
          ? "Congratulations! You won the game!"
          : "You lost. Better luck next time!";

      resetScore();
    }
  });
}

playGame();
