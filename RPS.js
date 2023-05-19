let playerChoice;
let computerChoice;
let winner;
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
    input = prompt("Rock, paper or scissors?")
    playerChoice = input;
}

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissors"
            break;
        case 2:
            computerChoice = "paper";
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
    else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        computerScore++;
        winner = "Computer";
    }
    else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        playerScore++;
        winner = "Player";
    }
    else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "scissors") {
        winner = "No one";
    }
    else {
        winner = "No one"
        alert("Invalid input, valid inputs are rock, paper and scissors.")
    }
}

function game() {
    getPlayerChoice();
    getComputerChoice()
    playRound();
    alert(`Player uses ${playerChoice}, computer uses ${computerChoice}.
    ${winner} wins\nplayerScore:${playerScore} computerScore:${computerScore}`);
}

for (let i = 0; i < 5; i++) {
    game();
}