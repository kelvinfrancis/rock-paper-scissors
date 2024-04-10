const choice = ["Rock", "Paper", "Scissors"]
const content = document.getElementById('content')
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const playAgainBtn = document.createElement('button');
const playerScore = document.createElement('p')
const cpuScore = document.createElement('p')
const textResult = document.createElement('div')
let pScore = 0;
let cpScore = 0;

rockBtn.textContent = "✊";
content.appendChild(rockBtn);

paperBtn.textContent = "✋";
content.appendChild(paperBtn);

scissorsBtn.textContent = "✌️";
content.appendChild(scissorsBtn);

content.appendChild(textResult);
playerScore.textContent = `Player Score: ${pScore}`;
content.appendChild(playerScore);

cpuScore.textContent = `CPU Score: ${cpScore}`
content.appendChild(cpuScore);

playAgainBtn.textContent = "Replay";
playAgainBtn.style.width = '70px';

rockBtn.addEventListener('click', () => {
    textResult.textContent = `${playRound('rock', getComputerChoice(choice))}`;
    whoWins();
})

paperBtn.addEventListener('click', () => {
    textResult.textContent = `${playRound('paper', getComputerChoice(choice))}`;
    whoWins();
})

scissorsBtn.addEventListener('click', () => {
    textResult.textContent = `${playRound('scissors', getComputerChoice(choice))}`;
    whoWins();
})

playAgainBtn.addEventListener('click', () => {
    playAgain();
});

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
        pScore += 1;
        playerScore.textContent = `Player Score: ${pScore}`;
        return 'You Win!'
    }
    else if (player === cpu){
        return "It's a tie."
    }
    else{
        cpScore += 1
        cpuScore.textContent = `CPU Score: ${cpScore}`
        return 'You Lose!'
    }
};

function whoWins(){
    if (pScore === 5){
        textResult.textContent = "You win the GAME!"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        content.appendChild(playAgainBtn);
    } else if(cpScore === 5){
        textResult.textContent = "You lose, CPU win's the GAME!"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        content.appendChild(playAgainBtn);
    }
}

function playAgain(){
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    playerScore.textContent = `Player Score: ${0}`;
    cpuScore.textContent = `CPU Score: ${0}`
    textResult.textContent = "";
    content.removeChild(playAgainBtn);
}