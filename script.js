let humanScore = 0;
let computerScore = 0;

const controls = document.querySelector('#controls');
const resultDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#scores');

const choices = ["rock", "paper", "scissors"];

// --------------------
// Computer choice
// --------------------
function getComputerChoice(){
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

// --------------------
// Play one round
// --------------------
function playRound(humanChoice){
    if(humanScore === 5 || computerScore === 5){
        return;
    }

    const computerChoice = getComputerChoice();
    let message = "";

    if(humanChoice === computerChoice){
        message = `Draw! Both chose ${humanChoice}`;
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        message = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        message = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    updateUI(message);
}

// --------------------
// UI update
// --------------------
function updateUI(message){
    resultDiv.textContent = message;
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if(humanScore === 5){
        resultDiv.textContent = "Human wins the game!";
        disableButtons();
    } else if(computerScore === 5){
        resultDiv.textContent = "Computer wins the game!";
        disableButtons();
    }
}

// --------------------
// Buttons
// --------------------
function setupButtons(){
    controls.innerHTML = "";

    choices.forEach((choice) => {
        const button = document.createElement('button');
        button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);

        button.addEventListener('click', () => {
            playRound(choice);
        });

        controls.appendChild(button);
    });
}

// --------------------
// Disable buttons
// --------------------
function disableButtons(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn) => {
        btn.disabled = true;
    });
}

setupButtons();




