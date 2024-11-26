let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.random();
    if (choice >= 0 && choice <= 0.33) {
        choice = 'rock';
    } else if (choice > 0.33 && choice <= 0.66) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt(`Choose your move (Rock, Paper, Scissors)`).toLowerCase();

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } 
    return getHumanChoice();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie, both choose ${humanChoice}`);
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`You lose! Scissors beats Paper`);
        computerScore++;
    } else if (humanChoice === 'scissors' &&  computerChoice === 'paper') {
        console.log(`You win! Scissors beats paper`);
        humanScore++; 
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`You lose, Paper beats Rock`);
        computerScore++;   
    } else if (computerChoice === 'rock' && humanChoice === 'paper') { 
        console.log(`You win, Paper beats Rock`);
        humanScore++;      
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`You win! Rock beats Scissors`)
        humanScore++;       
    } else {
        console.log(`You lose, Rock beats Scissors`);
        computerScore++;     
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});


const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});
