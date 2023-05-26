let playerChoice;
let computerChoice;
let winner;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const playerBox = document.querySelector('#playerBox');
const results = document.createElement('p');
const log = document.querySelector('#log');
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');

const playAgain = document.createElement('button');
playAgain.style.cssText = 'padding: 30px; background-color: red; font-size: 28px; color: white; border-radius: 36px; border-style: solid; border-color: white;';
playAgain.textContent = 'Play Again';
playAgain.addEventListener('click', () => window.location.reload())

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "Rock") playerChoice = "rock"
        else if (button.id == "Paper") playerChoice = "paper"
        else if (button.id == "Scissors") playerChoice = "scissors"
        game()
    });
  });

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissors";
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
}

function game() {
    getComputerChoice();
    playRound();
    results.textContent = `Player uses ${playerChoice}, computer uses ${computerChoice}.
    ${winner} wins this round.`;
    log.insertBefore(results, score);
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    if (computerScore === 5) {
        results.textContent = "Computer wins the game.";
        playerBox.innerHTML = "";
        playerBox.appendChild(playAgain);
    }
    if (playerScore === 5) {
        results.textContent = "Player wins the game.";
        playerBox.innerHTML = "";
        playerBox.appendChild(playAgain);
    }
}