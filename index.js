const choices = ["rock", "paper", "scissors"]; // possible choices
const results = ["You win!", "That's a draw", "You lose"]; // possible results
let computerScore = 0;
let playerScore = 0;
let playAgain;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  return choices[computerChoice];
}

function getHumanChoice() {
  let input = prompt(
    "What is your choice? Rock / Paper / Scissors"
  ).toLowerCase();

  switch (input) {
    case "rock":
      return choices[0]; // rock
    case "paper":
      return choices[1]; // paper
    case "scissors":
      return choices[2]; // scissors
    default:
      alert("Input not valid! please enter Rock, Paper or Scissors");
      return;
  }
}

function evaluateResult(computerChoice, playerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return results[0]; // win
  } else if (playerChoice === computerChoice) {
    return results[1]; // draw
  } else {
    return results[2]; // lose
  }
}

function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = getHumanChoice();
  let roundResult = evaluateResult(computerChoice, playerChoice);

  // check for correct input
  if (playerChoice !== undefined) {
    alert(
      `Computer: ${computerChoice}\nPlayer: ${playerChoice}\nResult: ${roundResult}`
    );
    return roundResult;
  }
}

function playGame() {
  let roundResult = playRound();

  if (roundResult === "You win!") {
    ++playerScore;
  } else if (roundResult === "You lose") {
    ++computerScore;
  }
  alert(`Scores => Player: ${playerScore} - Computer: ${computerScore}`);
}

do {
  // First to reach five points win
  while (playerScore < 5 && computerScore < 5) {
    playGame();

    if (playerScore === 5) {
      alert(`Congratulations! ${results[0]}`); // game win
    } else if (computerScore === 5) {
      alert(`${results[2]} Better luck next time!`); // game lost
    }
  }
  // reset scores
  playerScore = 0;
  computerScore = 0;

  playAgain = prompt("do you want to play again? (yes/no)").toLowerCase();
} while (playAgain !== "no");
