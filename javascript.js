function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return 'win'
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
               (playerSelection === 'paper' && computerSelection === 'scissors') ||
               (playerSelection === 'scissors' && computerSelection === 'rock')) {
                console.log(`You lose... Computer chose ${computerSelection}. ${computerSelection} beats ${playerSelection}.`);
                return 'lose'
    } else {
        console.log('tie')
        return 'tie'
    }
}

let buttons = document.querySelectorAll(".buttons button");
let scoreboard = document.querySelector(".score");
let results = document.querySelector(".results");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function game(e) { 
    let playerSelection = e.target.value;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    switch(result) {
        case 'win': 
            playerScore++; 
            scoreboard.textContent = `Man: ${playerScore} || Machine: ${computerScore}`   
            results.textContent = `You win: ${playerSelection} beats ${computerSelection}.`;
            checkWinner(playerScore, computerScore);
            break;
        case 'lose': 
            computerScore++;
            scoreboard.textContent = `Man: ${playerScore} || Machine: ${computerScore}`   
            results.textContent = `You lose: ${computerSelection} beats ${playerSelection}.`;
            checkWinner(playerScore, computerScore);
            break;
        case 'tie': 
            results.textContent = `It's a tie: ${playerSelection} against ${computerSelection}.`;
            break;
    }
}

function checkWinner(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach( (button) => button.removeEventListener('click', game));
        gameOver = document.createElement('div');
        if (playerScore > computerScore) {
            gameOver.textContent = 'Game over. You\'ve WON! Reload page to try again!';
            results.after(gameOver);
        } else {
            gameOver.textContent = 'Game over. You\'ve LOST. Reload page to try again!';
            results.after(gameOver);
        }       
    }
}


buttons.forEach( (button) => {
    button.addEventListener('click', game)
})