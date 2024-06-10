

// this function gets random choice of rock, paper or scissors

function getComputerChoice() {

  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";

  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return rock;
  }

  else if (randomNum === 1) {
    return paper;
  }

  else return scissors;
}

// this function gets input from player with choice of rock, paper or scissors

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors!").toLowerCase();
  return humanChoice;
}



function playGame() {

// scores of player and computer

let humanScore = 0;
let computerScore = 0;

// function to play one round

  function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        humanScore += 1;
      }

  else if (humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "rock") {
              console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
              computerScore += 1;
            }

  else console.log("It's a tie!");
}

// five rounds of game

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

// choosing the winner

if (humanScore > computerScore) {
  console.log(`You win! Your score is ${humanScore}, computer is ${computerScore}`);
}

else  if (humanScore < computerScore) {
  console.log(`You lose! Your score is ${humanScore}, computer is ${computerScore}`)
}

else console.log("No winner!");

}

playGame();


