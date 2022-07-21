let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function generateComputerChoice() {
  const choices = ["r", "p", "s"];
  computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  let smallUserWord = "user".fontsize(3).sub();
  let smallCompWord = "Comp".fontsize(3).sub();

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} .
   You Win!! 💞💥`;

  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 2000);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  let smallUserWord = "user".fontsize(3).sub();
  let smallCompWord = "Comp".fontsize(3).sub();

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} Loses to ${convertToWord(computerChoice)}${smallCompWord} .
   You Lost!! 😢🤡`;

  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 2000);
}

function draw(userChoice, computerChoice) {
  let smallUserWord = "user".fontsize(3).sub();
  let smallCompWord = "Comp".fontsize(3).sub();

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} Draws to ${convertToWord(
    computerChoice
  )}${smallCompWord} 🤜🤛.`;

  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 2000);
}
function game(userChoice) {
  const computerChoice = generateComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
