const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

buttons.forEach((button) => {
  button.addEventListener('click', playRound)
})

  let playerScore = 0;
  let computerScore = 0;

function playRound(event) {

  let playerChoice = event.target.textContent;
  let computerChoice = getComputerSelection();
  

  if (
		(playerChoice === 'Rock' && computerChoice === 'Scissors') ||
		(playerChoice === 'Paper' && computerChoice === 'Rock') ||
		(playerChoice === 'Scissors' && computerChoice === 'Paper')
	) {
    
    playerScore += 1
		result.textContent = `You win! ${playerChoice} beats ${computerChoice}! Your score: ${playerScore}. Computer's Score: ${computerScore}`
		
	} else if (
		(playerChoice === 'Rock' && computerChoice === 'Paper') ||
		(playerChoice === 'Paper' && computerChoice === 'Scissors') ||
		(playerChoice === 'Scissors' && computerChoice === 'Rock')
	) {
    
    computerScore += 1
		result.textContent = `You lose! ${computerChoice} beats ${playerChoice}! Your score: ${playerScore}. Computer's Score: ${computerScore}`
		
	} else result.textContent = `It's a tie! Your score: ${playerScore}. Computer's Score: ${computerScore}`
	
  if (playerScore == 5) {
    return result.textContent = ` You win! Your score is 5 points! Computer's score is ${computerScore} points`
  }

  else if (computerScore == 5) {
    return (result.textContent = `You lose! Computer's score is 5 points! Your score is ${playerScore}`)
  }

}

function getComputerSelection() {

	let randomNum = Math.floor(Math.random() * 3)

	if (randomNum === 0) {
		return 'Rock'
	} else if (randomNum === 1) {
		return 'Paper'
	} else return 'Scissors'

}