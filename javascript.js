function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else if (choice === 2) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'paper':
                return 'You lose! Paper beats Rock!';
            case 'scissors':
                return 'You win! Rock beats Scissors!';
            case 'rock':
                return 'You tied. Rock against Rock!';
        }
    } else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'scissors':
                return 'You lose! Scissors beats Paper!';
            case 'rock':
                return 'You win! Paper beats Rock!';
            case 'paper':
                return 'You tied. Paper against Paper!';
        }
    } else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'rock': 
                return 'You lose! Rock beats Scissors!';
            case 'paper':
                return 'You win! Scissors beats Paper!';
            case 'scissors':
                return 'You tied. Scissors against scissors!';
        }
    }
}

const playerSelection = 'scisSoRS';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));