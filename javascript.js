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
                console.log('You lose! Paper beats Rock!');
                return 'lose';
            case 'scissors':
                console.log('You win! Rock beats Scissors!');
                return 'win';
            case 'rock':
                console.log('You tied. Rock against Rock!');
                return 'tie';
        }
    } else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'scissors':
                console.log('You lose! Scissors beats Paper!');
                return 'lose';
            case 'rock':
                console.log('You win! Paper beats Rock!');
                return 'win';
            case 'paper':
                console.log('You tied. Paper against Paper!');
                return 'tie';
        }
    } else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'rock': 
                console.log('You lose! Rock beats Scissors!');
                return 'lose';
            case 'paper':
                console.log('You win! Scissors beats Paper!');
                return 'win';
            case 'scissors':
                console.log('You tied. Scissors against scissors!');
                return 'tie';
        }
    }
}

const playerSelection = 'scisSoRS';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));