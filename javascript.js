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

function game() {
    let playerSelection;
    let computerSelection;
    let result;
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    for (let round=1; round <= 5; round++) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        
        computerSelection = getComputerChoice();

        result = playRound(playerSelection, computerSelection);
        
        switch(result) {
            case 'win': 
                playerScore++;
                break;
            case 'lose': 
                computerScore++;
                break;
            case 'tie': 
                tieScore++; 
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You won the game! You won ${playerScore}, lost ${computerScore}, and tied ${tieScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`You lost the game. You won ${playerScore}, lost ${computerScore}, and tied ${tieScore}.`);
    } else if (playerScore === computerScore) {
        console.log(`You tied the game. You won ${playerScore}, lost ${computerScore}, and tied ${tieScore}.`);
    }
}