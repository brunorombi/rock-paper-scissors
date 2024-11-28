let humanScore = 0;
let computerScore = 0;
let rounds = 5;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");

result.textContent = "Click to start the game. Rounds left: 5"

function getComputerChoice() {
    const choice = Math.random();
    if (choice <= 0.33) return "rock";
    if (choice <= 0.66) return "paper";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = `Tie, both choose ${humanChoice}. Rounds left: ${rounds}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}. Rounds left: ${rounds}`;
    } else {
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Rounds left: ${rounds}`;
    }
}

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
    updateWinner();
    humanScore = 0;
    computerScore = 0;
    rounds = 5;
    result.textContent = "Click to start the game. Rounds left: 5"
}

function handleChoice(humanChoice) {
    const computerChoice = getComputerChoice();
    rounds--;
    playRound(humanChoice, computerChoice);

    if (rounds === 0) {
        endGame();
    }
}

rock.addEventListener('click', () => handleChoice("rock"));
paper.addEventListener('click', () => handleChoice("paper"));
scissors.addEventListener('click', () => handleChoice("scissors"));   


