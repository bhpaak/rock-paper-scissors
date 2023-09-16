function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();

//     if (playerSelection === 'rock') {
//         switch(computerSelection) {
//             case 'paper':
//                 console.log('You lose! Paper beats Rock!');
//                 return 'lose';
//             case 'scissors':
//                 console.log('You win! Rock beats Scissors!');
//                 return 'win';
//             case 'rock':
//                 console.log('You tied. Rock against Rock!');
//                 return 'tie';
//         }
//     } else if (playerSelection === 'paper') {
//         switch(computerSelection) {
//             case 'scissors':
//                 console.log('You lose! Scissors beats Paper!');
//                 return 'lose';
//             case 'rock':
//                 console.log('You win! Paper beats Rock!');
//                 return 'win';
//             case 'paper':
//                 console.log('You tied. Paper against Paper!');
//                 return 'tie';
//         }
//     } else if (playerSelection === 'scissors') {
//         switch(computerSelection) {
//             case 'rock': 
//                 console.log('You lose! Rock beats Scissors!');
//                 return 'lose';
//             case 'paper':
//                 console.log('You win! Scissors beats Paper!');
//                 return 'win';
//             case 'scissors':
//                 console.log('You tied. Scissors against scissors!');
//                 return 'tie';
//         }
//     }
// }

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
            if (playerScore === 5) {
                buttons.forEach( (button) => button.removeEventListener('click', game));
                console.log(`player: ${playerScore} | computer: ${computerScore} `)
                console.log('Game over');
            }
            break;
        case 'lose': 
            computerScore++;
            if (computerScore === 5) {
                buttons.forEach( (button) => button.removeEventListener('click', game));
                console.log(`player: ${playerScore} | computer: ${computerScore} `)
                console.log('Game over');
            }
            break;
        case 'tie': 
            tieScore++; 
            console.log(tieScore);
            break;
    }
}

buttons.forEach( (button) => {
    button.addEventListener('click', game)
})
