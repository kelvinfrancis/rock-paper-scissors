const choice = ["Rock", "Paper", "Scissors"]
// Random Choice
function getComputerChoice(arr) {
    // Random index
    const randomIndex = Math.floor(Math.random() * arr.length);
    return choice[randomIndex];
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let cpu = computerSelection.toLowerCase();

    if (player == "rock" && cpu == "scissors" || player == "paper" && cpu == "rock" || player == "scissors" && cpu == "paper") {
        return `You Won! ${player} beats ${cpu}.`
    }
    else if (player == cpu){
        return "It's a tie."
    }
    else{
        return `You Lose! ${cpu} beats ${player}.`
    }
}

for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Choose your move (Rock, Paper, Scissors): \nSee the result on the Console.");
    console.log(playRound(playerChoice, getComputerChoice(choice)));
}