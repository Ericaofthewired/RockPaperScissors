const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
let winner;
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
    input = prompt("Rock, paper or scissors?")
    return input;
}

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "scissors"
        case 2:
            return "paper";
    }
}

function playRound() {
    if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock") {
        winner = "No one";
    }
    else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        computerScore++;
        winner = "Computer";
    }
    else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        playerScore++;
        winner = "Player";
    }
    else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        playerScore++;
        winner = "Player";
    }
    else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "paper") {
        winner = "No one";
    }
    else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        computerScore++;
        winner = "Computer";
    }
    else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock") {
        winner = "No one";
    }
    else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        computerScore++;
        winner = "Computer";
    }
    else {
        playerScore++;
        winner = "Player";
    }
}

playRound();
alert(`Player uses ${playerChoice}, computer uses ${computerChoice}.
    ${winner} wins\nplayerScore:${playerScore} computerScore:${computerScore}`);
