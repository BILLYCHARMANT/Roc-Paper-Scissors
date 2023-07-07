function computerPart() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} kills ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} kills ${playerSelection}.`;
    }
}

function nowGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice between (Rock, Paper, or Scissors):');
        const computerSelection = computerPart();
        console.log(playRound(playerSelection, computerSelection));
    }
}

nowGame();
