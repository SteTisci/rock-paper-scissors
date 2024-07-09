let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

// Possible choices
const choices = ["fire", "water", "grass"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);

  // Returns a string at a random index from the choices array
  return choices[randomIndex];
}

function checkWinner(playerChoice, computerChoice) {
  // Possible outcomes for the player to win
  const winningConditions = {
    fire: "grass",
    water: "fire",
    grass: "water",
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
  showRoundChoice(playerChoice, computerChoice);
  showRoundInfo(roundResult);
}

function playGame(event) {
  const buttonElement = event.target.closest("button");

  // Check if buttonElement is not null before accessing its classList
  if (!buttonElement) return;
  const playerChoice = buttonElement.classList.value;

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
const playerScoreParagraph = document.querySelector(".player-score");
const playerChoiceImg = document.querySelector(".player-choice");
const computerScoreParagraph = document.querySelector(".computer-score");
const computerChoiceImg = document.querySelector(".computer-choice");
const roundParagraph = document.querySelector(".rounds");

function showRoundInfo(roundResult) {
  resultTitle.textContent = roundResult;
  playerScoreParagraph.textContent = `Player: ${playerScore}`;
  computerScoreParagraph.textContent = `Computer: ${computerScore}`;
  roundParagraph.textContent = `Round ${playerScore + computerScore}`;
}

function showRoundChoice(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "fire":
      playerChoiceImg.setAttribute("src", "/images/fire.png");
      break;
    case "grass":
      playerChoiceImg.setAttribute("src", "/images/grass.png");
      break;
    case "water":
      playerChoiceImg.setAttribute("src", "/images/water.png");
      break;
  }
  switch (computerChoice) {
    case "fire":
      computerChoiceImg.setAttribute("src", "/images/fire.png");
      break;
    case "grass":
      computerChoiceImg.setAttribute("src", "/images/grass.png");
      break;
    case "water":
      computerChoiceImg.setAttribute("src", "/images/water.png");
  }
}

function showGameResult() {
  resultTitle.textContent =
    playerScore > computerScore
      ? "Congratulations! You won the game!"
      : "You lost... Better luck next time!";
}

choiceContainer.addEventListener("click", playGame);
