let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

// Possible choices
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);

  // Returns a string at a random index from the choices array
  return choices[randomIndex];
}

function checkWinner(playerChoice, computerChoice) {
  // Possible outcomes for the player to win
  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  let winner = "";

  if (winningConditions[playerChoice] === computerChoice) {
    winner = "player";
  } else if (playerChoice === computerChoice) {
    winner = "tie";
  } else {
    winner = "computer";
  }
  return winner;
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
}

function playRound(playerChoice) {
  // Stop the round if the player input is invalid
  if (!choices.includes(playerChoice)) return;

  const computerChoice = getComputerChoice();
  let roundResult = "";

  roundWinner = checkWinner(playerChoice, computerChoice);

  if (roundWinner === "tie") {
    roundResult = "It's a tie";
  } else if (roundWinner === "player") {
    playerScore++;
    roundResult = "You win!";
  } else {
    computerScore++;
    roundResult = "You lose...";
  }
  showRoundInfo(roundResult);
}

function playGame(event) {
  const playerChoice = event.target.classList.value;

  playRound(playerChoice);
  let gameOver = playerScore === 5 || computerScore === 5;

  // Check if the game is over after updating the scores
  if (gameOver) {
    showGameResult();
    resetScore();
  }
}

// User Interface

const choiceContainer = document.querySelector(".choices");
const resultTitle = document.querySelector(".result");
const scoreParagraph = document.querySelector(".score");
const roundParagraph = document.querySelector(".rounds");

function showRoundInfo(roundResult) {
  resultTitle.textContent = roundResult;
  scoreParagraph.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  roundParagraph.textContent = `Round ${playerScore + computerScore}`;
}

function showGameResult() {
  resultTitle.textContent =
    playerScore > computerScore
      ? "Congratulations! You won the game!"
      : "You lost... Better luck next time!";
}

choiceContainer.addEventListener("click", playGame);
