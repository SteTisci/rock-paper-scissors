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
  let winner = "";

  // Possible outcomes for the player to win
  const winningConditions = {
    fire: "grass",
    water: "fire",
    grass: "water",
  };

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
}

function playRound(playerChoice) {
  // Stop the round if the player input is invalid
  if (!choices.includes(playerChoice)) return;

  const computerChoice = getComputerChoice();
  roundWinner = checkWinner(playerChoice, computerChoice);

  switch (roundWinner) {
    case "tie":
      showRoundInfo("It's a tie");
      break;
    case "player":
      playerScore++;
      showRoundInfo("You win!");
      break;
    case "computer":
      computerScore++;
      showRoundInfo("You lose...");
      break;
  }
  showRoundChoice(playerChoice, computerChoice);

  // Check if the game is over before updating the scores
  if (playerScore === 5 || computerScore === 5) {
    showGameResult();
    resetScore();
  }
}

function playGame(event) {
  const buttonElement = event.target.closest("button");

  if (!buttonElement) return;
  const playerChoice = buttonElement.classList.value;

  playRound(playerChoice);
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
  playerChoiceImg.setAttribute("src", `images/${playerChoice}.png`);
  computerChoiceImg.setAttribute("src", `images/${computerChoice}.png`);
}

function showGameResult() {
  resultTitle.textContent =
    playerScore > computerScore
      ? "Congratulations! You won the game!"
      : "You lost... Better luck next time!";
}

// Date for the footer
const date = new Date().getFullYear();
document.querySelector(".author-name").innerHTML = `${date} SteTisci`;

//
//  GAME EXECUTION
//

choiceContainer.addEventListener("click", playGame);
