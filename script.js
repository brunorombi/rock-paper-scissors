let humanScore = 0;
let computerScore = 0;
let rounds = 5;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = `Tie, both choose ${humanChoice} Rounds left: ${rounds}`;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        result.textContent = `You lose! Scissors beats Paper Rounds left: ${rounds}`;
        computerScore++;
    } else if (humanChoice === 'scissors' &&  computerChoice === 'paper') {
        result.textContent = `You win! Scissors beats paper Rounds left: ${rounds}`;
        humanScore++; 
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        result.textContent = `You lose, Paper beats Rock Rounds left: ${rounds}`;
        computerScore++;   
    } else if (computerChoice === 'rock' && humanChoice === 'paper') { 
        result.textContent = `You win, Paper beats Rock Rounds left: ${rounds}`;
        humanScore++;      
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        result.textContent = `You win! Rock beats Scissors Rounds left: ${rounds}`
        humanScore++;       
    } else {
        result.textContent = `You lose, Rock beats Scissors Rounds left: ${rounds}`;
        computerScore++;     
    }
}


rock.addEventListener('click', () => {
    humanChoice = "rock";
    const computerChoice = getComputerChoice();
    rounds--;
    playRound(humanChoice, computerChoice);
    if (rounds === 0) {
        updateWinner(humanScore, computerScore);
        endGame();
    }
});

paper.addEventListener('click', () => {
    humanChoice = "paper";
    const computerChoice = getComputerChoice();
    rounds--;
    playRound(humanChoice, computerChoice);
    if (rounds === 0) {
        updateWinner(humanScore, computerScore);
        endGame();
    }   

});

scissors.addEventListener('click', () => {
    humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    rounds--;
    playRound(humanChoice, computerChoice);
    if (rounds === 0) {
        updateWinner(humanScore, computerScore);
        endGame();
    }
});

function updateWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        winner.textContent = "You win!";
    } else if (computerScore > humanScore) {
        winner.textContent = "You lose :(";
    } else {
        winner.textContent = "Tie!";
    }
}

function endGame() {
    humanScore = 0;
    computerScore = 0;
    rounds = 5;
}
