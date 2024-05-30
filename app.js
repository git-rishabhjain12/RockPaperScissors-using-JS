let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");
let resetBtn = document.querySelector("button");

// Selecting user Choice

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Generating computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

// updating Draw condition
const drawGame = () => {
  console.log("Game is draw");
  msg.innerText = "Game is draw, Play again";
  msg.style.backgroundColor = "black";
};

// Play Game
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      // userChoice === "scissors";
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }

  // Second options for choices
  // if (userChoice === compChoice) {
  //   // Draw game
  //   drawGame();
  // } else if (
  //   (userChoice === "rock" && compChoice === "scissor") ||
  //   (userChoice === "paper" && compChoice === "rock") ||
  //   (userChoice === "scissor" && compChoice === "paper")
  // ) {
  //   // User wins
  //   showWinner(true, userChoice, compChoice);
  // } else {
  //   // Computer wins
  //   showWinner(false, userChoice, compChoice);
  // }

  showResetBtn();
};

// Showing winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win!! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost!! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Reset Button updations
const showResetBtn = () => {
  if (msg.innerText === "Play your move") {
    resetBtn.classList.add("hide");
  } else {
    resetBtn.classList.remove("hide");
  }
};

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  msg.innerText = "Play your move";
  resetBtn.classList.add("hide");
  resetBtn.style.backgroundColor = "black";
  msg.style.backgroundColor = "black";
});
