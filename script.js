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
        result.textContent = `Tie, both choose ${humanChoice}`;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        result.textContent = `You lose! Scissors beats Paper`;
        computerScore++;
    } else if (humanChoice === 'scissors' &&  computerChoice === 'paper') {
        result.textContent = `You win! Scissors beats paper`;
        humanScore++; 
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        result.textContent = `You lose, Paper beats Rock`;
        computerScore++;   
    } else if (computerChoice === 'rock' && humanChoice === 'paper') { 
        result.textContent = `You win, Paper beats Rock`;
        humanScore++;      
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        result.textContent = `You win! Rock beats Scissors`
        humanScore++;       
    } else {
        result.textContent = `You lose, Rock beats Scissors`;
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

const result = document.querySelector("#result");
