/// variables and DOMs
let userScore = 0;
let computerScore = 0;
const userScoreDomSpan = document.getElementById("user-score");
const computerScoreDomSpan = document.getElementById("computer-score");
const scoreBoardDomDiv = document.querySelector(".scoreboard");
const gameResultDomP = document.querySelector(".game-result p");
const rockDomDiv = document.getElementById("rck");
const paperDomDiv = document.getElementById("ppr");
const scissorsDomDiv = document.getElementById("scs");

const getComputerChoise = () => {
  const choices = ["rck", "ppr", "scs"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
getComputerChoise();

const convert = (letter) => {
  if (letter === "rck") return "Rock";
  if (letter === "ppr") return "Paper";
  if (letter === "scs") return "Scissors";
};
const win = (user, computer) => {
  userScore++;
  userScoreDomSpan.innerHTML = userScore;
  computerScoreDomSpan.innerHTML = computerScore;
  gameResultDomP.innerHTML = `${convert(user)} beats ${convert(
    computer
  )}. You win!`;
  document.getElementById(user).classList.add("green-border");
  setTimeout(
    () => document.getElementById(user).classList.remove("green-border"),
    500
  );
};
const lose = (user, computer) => {
  computerScore++;
  computerScoreDomSpan.innerHTML = computerScore;
  userScoreDomSpan.innerHTML = userScore;
  gameResultDomP.innerHTML = `${convert(computer)} beats ${convert(
    user
  )}. You lose!`;
  document.getElementById(user).classList.add("red-border");
  setTimeout(
    () => document.getElementById(user).classList.remove("red-border"),
    500
  );
};
const draw = (user, computer) => {
  userScoreDomSpan.innerHTML = userScore;
  computerScoreDomSpan.innerHTML = computerScore;
  gameResultDomP.innerHTML = `${convert(user)} and ${convert(
    computer
  )}. It's a draw!`;
  document.getElementById(user).classList.add("grey-border");
  setTimeout(
    () => document.getElementById(user).classList.remove("grey-border"),
    500
  );
};
const game = (userChoise) => {
  const computerChoise = getComputerChoise();
  switch (userChoise + computerChoise) {
    case "pprrck":
    case "rckscs":
    case "scsppr":
      win(userChoise, computerChoise);
      break;
    case "rckppr":
    case "scsrck":
    case "pprscs":
      lose(userChoise, computerChoise);
      break;
    case "pprppr":
    case "rckrck":
    case "scsscs":
      draw(userChoise, computerChoise);
      break;
  }
};

const main = () => {
  rockDomDiv.addEventListener("click", () => game("rck"));
  paperDomDiv.addEventListener("click", () => game("ppr"));
  scissorsDomDiv.addEventListener("click", () => game("scs"));
};
main();
