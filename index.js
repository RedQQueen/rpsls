// OPEN RULES MODAL   //GAME OVER MODAL
// BLUR BACKGROUND WHEN RULES MODALS ARE OPENED

let rules_modal = document.querySelector(".rules_modal");
let game_over_modal = document.querySelector(".game_over_modal");
let blurit = document.querySelectorAll(".blurit");

function openRulesModal() {
  rules_modal.style.display = "block";
  blurit.forEach((item) => (item.style.filter = "blur(2rem)"));
}

function openGameOverModal(winner, playerOneWins, robotWins) {
  game_over_modal.style.display = "flex";
  game_over_modal.textContent = `CONGRATS ${winner}
  PLAYER ONE SCORE | ${playerOneWins} 
  ROBOT SCORE | ${robotWins}         
  `;

  blurit.forEach((item) => (item.style.filter = "blur(2rem)"));
}

function closeRulesModal() {
  rules_modal.style.display = "none";
  blurit.forEach((item) => (item.style.filter = "none"));
}

function closeGameOverModal() {
  game_over_modal.style.display = "none";
  blurit.forEach((item) => (item.style.filter = "none"));
}

//PLAYERS CHOOSING THEIR HAND
let hand1 = document.querySelectorAll(".hand1");
let hand2 = document.querySelectorAll(".hand2");

let outcomes = document.getElementById("outcomes");
let player_one_outcome = document.querySelector(".player_one_outcome");
let robot_outcome = document.querySelector(".robot_outcome");
let result = document.querySelector(".result");

function settingPlayerOne() {
  console.log("settingPlayerOne function run");
  hand1.forEach((hand) => {
    // PLAYER ONE CHOOSING THEIR HAND
    let typeOfHand = hand.classList[0];
    hand.addEventListener("click", function handOneChosen() {
      player_one_outcome.innerHTML = `
      <img src="./images/${typeOfHand}.png" 
      alt="hand_${typeOfHand}" 
      class="player_one_${typeOfHand} flex j-center a-center" 
      border="3px solid black"
      />`;
      settingRobot();
      showResultOfRound();
      checkForRoundWinner();
      checkForGameWinner();
    });
  });
}

function settingRobot() {
  const gameOptions = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomNumber = Math.floor(Math.random() * gameOptions.length);
  const randomOption = gameOptions[randomNumber];
  if (player_one_outcome.innerHTML.length > 1) {
    console.log("settingRobot function run");
    // ROBOT CHOOSING THEIR HAND
    robot_outcome.innerHTML = `
    <img src="./images/${randomOption}.png"
    alt="hand_${randomOption}"
    class="robot_${randomOption} flex j-center a-center"
    border="3px solid black"
    />`;
  }
  return;
}

settingPlayerOne();

//CHECKING FOR WHO WON THIS ROUND AND DISPLAYING THE RESULT OF THE ROUND WINNER

let player_one_number_of_wins = document.querySelector(
  ".player_one_number_of_wins"
);
let robot_number_of_wins = document.querySelector(".robot_number_of_wins");

function yayPlayerOne() {
  player_one_number_of_wins.innerHTML++;
  player_one_number_of_wins.classList.add("flash");
  player_one_outcome.firstElementChild.style.border =
    "10px solid rgb(255,0,255)";
  player_one_outcome.firstElementChild.classList.add("flash");
  player_one_number_of_wins.style.color = "rgb(255,0,255)";
}

function yayRobot() {
  robot_number_of_wins.innerHTML++;
  robot_number_of_wins.classList.add("flash");
  robot_outcome.firstElementChild.style.border = "10px solid rgb(255,0,255)";
  robot_outcome.firstElementChild.classList.add("flash");
  robot_number_of_wins.style.color = "rgb(255,0,255)";
}

function checkForRoundWinner() {
  let player_one_rock = document.querySelector(".player_one_rock");
  let player_one_paper = document.querySelector(".player_one_paper");
  let player_one_scissors = document.querySelector(".player_one_scissors");
  let player_one_lizard = document.querySelector(".player_one_lizard");
  let player_one_spock = document.querySelector(".player_one_spock");

  let robot_rock = document.querySelector(".robot_rock");
  let robot_paper = document.querySelector(".robot_paper");
  let robot_scissors = document.querySelector(".robot_scissors");
  let robot_lizard = document.querySelector(".robot_lizard");
  let robot_spock = document.querySelector(".robot_spock");

  //WHICH PLAYER HAS THE WINNING HAND (OR DRAW)
  //IF PLAYERS DRAW

  if (player_one_rock && robot_rock) {
    result.textContent = "ROCK DRAWS WITH ROCK";
  } else if (player_one_paper && robot_paper) {
    result.textContent = "PAPER DRAWS WITH PAPER";
  } else if (player_one_scissors && robot_scissors) {
    result.textContent = "SCISSORS DRAWS WITH SCISSORS";
  } else if (player_one_lizard && robot_lizard) {
    result.textContent = "LIZARD DRAWS WITH LIZARD";
  } else if (player_one_spock && robot_spock) {
    result.textContent = "SPOCK DRAWS WITH SPOCK";
    //IF PLAYER ONE WINS
  } else if (player_one_rock && robot_lizard) {
    result.textContent = "ROCK CRUSHES LIZARD";
    yayPlayerOne();
  } else if (player_one_rock && robot_scissors) {
    result.textContent = "ROCK CRUSHES SCISSORS";
    yayPlayerOne();
  } else if (player_one_paper && robot_rock) {
    result.textContent = "PAPER COVERS ROCK";
    yayPlayerOne();
  } else if (player_one_paper && robot_spock) {
    result.textContent = "PAPER DISPROVES SPOCK";
    yayPlayerOne();
  } else if (player_one_scissors && robot_paper) {
    result.textContent = "SCISSORS CUTS PAPER";
    yayPlayerOne();
  } else if (player_one_scissors && robot_lizard) {
    result.textContent = "SCISSORS DECAPITATES LIZARD";
    yayPlayerOne();
  } else if (player_one_lizard && robot_spock) {
    result.textContent = "LIZARD POISONS SPOCK";
    yayPlayerOne();
  } else if (player_one_lizard && robot_paper) {
    result.textContent = "LIZARD EATS PAPER";
    yayPlayerOne();
  } else if (player_one_spock && robot_scissors) {
    result.textContent = "SPOCK SMASHES SCISSORS";
    yayPlayerOne();
  } else if (player_one_spock && robot_rock) {
    result.textContent = "SPOCK VAPORIZES ROCK";
    yayPlayerOne();
    //IF THE ROBOT WINS
  } else if (robot_rock && player_one_lizard) {
    result.textContent = "ROCK CRUSHES LIZARD";
    yayRobot();
  } else if (player_one_scissors && robot_rock) {
    result.textContent = "ROCK CRUSHES SCISSORS";
    yayRobot();
  } else if (player_one_rock && robot_paper) {
    result.textContent = "PAPER COVERS ROCK";
    yayRobot();
  } else if (player_one_spock && robot_paper) {
    result.textContent = "PAPER DISPROVES SPOCK";
    yayRobot();
  } else if (player_one_paper && robot_scissors) {
    result.textContent = "SCISSORS CUTS PAPER";
    yayRobot();
  } else if (player_one_lizard && robot_scissors) {
    result.textContent = "SCISSORS DECAPITATES LIZARD";
    yayRobot();
  } else if (player_one_spock && robot_lizard) {
    result.textContent = "LIZARD POISONS SPOCK";
    yayRobot();
  } else if (player_one_paper && robot_lizard) {
    result.textContent = "LIZARD EATS PAPER";
    yayRobot();
  } else if (player_one_scissors && robot_spock) {
    result.textContent = "SPOCK SMASHES SCISSORS";
    yayRobot();
  } else if (player_one_rock && robot_spock) {
    result.textContent = "SPOCK VAPORIZES ROCK";
    yayRobot();
  } else return;
}

function showResultOfRound() {
  if (player_one_outcome.hasChildNodes() && robot_outcome.hasChildNodes()) {
    console.log(robot_number_of_wins);
    console.log(player_one_number_of_wins);
    result.style.display = "flex ";
    setTimeout(() => {
      startNextRound();
    }, 1500);
  } else return;
}

function startNextRound() {
  clearTimeout();
  player_one_outcome.innerHTML = "";
  robot_outcome.innerHTML = "";
  player_one_number_of_wins.style.color = "black";
  robot_number_of_wins.style.color = "black";
  player_one_number_of_wins.classList.remove("flash");
  robot_number_of_wins.classList.remove("flash");
  result.textContent = "";
  result.style.display = "none";
}

// CHECKING WHO WON THE GAME, BEST OUT OF THREE ROUNDS
function checkForGameWinner() {
  if (player_one_number_of_wins.innerHTML === "3") {
    startNextRound();
    result.textContent = "PLAYER ONE WON!";
    openGameOverModal(
      "PLAYER ONE!",
      player_one_number_of_wins.innerHTML,
      robot_number_of_wins.innerHTML
    );
  } else if (robot_number_of_wins.innerHTML === "3") {
    startNextRound();
    result.textContent = "ROBOT WON!";
    openGameOverModal(
      "ROBOT!",
      player_one_number_of_wins.innerHTML,
      robot_number_of_wins.innerHTML
    );
  }
}

function restartGame() {
  player_one_number_of_wins.innerHTML = "0";
  robot_number_of_wins.innerHTML = "0";
  player_one_outcome.innerHTML = "";
  robot_outcome.innerHTML = "";
  result.textContent = "";
  result.style.display = "none";
  player_one_number_of_wins.style.color = "black";
  robot_number_of_wins.style.color = "black";
  closeGameOverModal();
}
