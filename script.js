
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

//This generates a random number from 0 to 2 [0,1,2] ~BroCode helped Random number generator in JavaScript 【4 minutes
let randomNum =  Math.floor(Math.random() * 3)

//console.log(randomNum)

if(randomNum === 0){
    //console.log("rock");
    return "rock"
} else if (randomNum === 1){
    //console.log("papper");
    return "papper"
} else if(randomNum === 2){
    //console.log("scissors");
    return "scissors"
}

}

//console.log(getComputerChoice())

function getHumanChoice(){
    //using toLowerCase here makes our input case insensitive like step 5 demands
    let choice = prompt("Enter your choice: Rock, Papper or Scissors").toLowerCase();
    
    if (choice === "rock"){
        //console.log("rock");
        return "rock"
    } else if(choice === "papper"){
        //console.log("papper")
        return "papper"
    } else if(choice === "scissors"){
       // console.log("scissors")
        return "scissors"
    }
}

//console.log(getHumanChoice());

//Step 5: the logic to play a single round
function playRound(humanChoice, computerChoice){


//Human choice logic when he wins increment the score by one
//ROCK
    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Sciccors")
        return humanScore += 1;
    } else if(humanChoice === "rock" && computerChoice === "papper"){
        console.log("You lose! Papper beats Rock")
        return humanScore += 0;
    }else if(humanChoice === "rock" && computerChoice === "rock"){
        console.log("Draw! Rock vs Rock")
        return humanChoice += 0;
    }

//Papper
if(humanChoice === "papper" && computerChoice === "scissors"){
    console.log("You lose! Sciccors beats Papper")
    return humanScore += 0;
} else if(humanChoice === "papper" && computerChoice === "rock"){
    console.log("You win! Papper beats Rock")
    return humanScore += 1;
}else if(humanChoice === "papper" && computerChoice === "papper"){
    console.log("Draw! Papper vs Papper")
    return humanChoice += 0;
}

//Scissors
if(humanChoice === "scissors" && computerChoice === "papper"){
    console.log("You win! Sciccors beats Papper")
    return humanScore += 1;
} else if(humanChoice === "scissors" && computerChoice === "rock"){
    console.log("You lose! Rock beats Scissors")
    return humanScore += 0;
}else if(humanChoice === "scissors" && computerChoice === "scissors"){
    console.log("Draw! Scissors vs Scissors")
    return humanChoice += 0;
}

//Computer score logic when it wins invrement it's score by one
//ROCK
    if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log("You win! Rock beats Sciccors")
        return computerScore += 1;
    } else if(computerChoice === "rock" && humanChoice === "papper"){
        console.log("You lose! Papper beats Rock")
        return computerScore += 0;
    }else if(computerChoice === "rock" && humanChoice === "rock"){
        console.log("Draw! Rock vs Rock")
        return computerScore += 0;
    }

//Papper
if(computerChoice === "papper" && humanChoice === "scissors"){
    console.log("You lose! Sciccors beats Papper")
    return computerScore += 0;
} else if(computerChoice === "papper" && humanChoice === "rock"){
    console.log("You win! Papper beats Rock")
    return computerScore += 1;
}else if(computerChoice === "papper" && humanChoice === "papper"){
    console.log("Draw! Papper vs Papper")
    return computerScore += 0;
}

//Scissors
if(computerChoice === "scissors" && humanChoice === "papper"){
    console.log("You win! Sciccors beats Papper")
    return computerScore += 1;
} else if(computerChoice === "scissors" && humanChoice === "rock"){
    console.log("You lose! Rock beats Scissors")
    return computerScore += 0;
}else if(computerChoice === "scissors" && humanChoice === "scissors"){
    console.log("Draw! Scissors vs Scissors")
    return computerScore += 0;
}


}

/*
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(humanSelection)
console.log(computerSelection)

console.log(playRound(humanSelection, computerSelection));
*/

//STEP 6: LOGIC TO PLAY THE ENTIRE GAME =>
    function playGame(){
    
        
        for(let i = 0; i < 5; i++){
            let humanSelection = getHumanChoice()
            let computerSelection = getComputerChoice()
            
            //console.log(humanSelection)
            //console.log(computerSelection)
            
            playRound(humanSelection, computerSelection)  
        }

        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);

        if(humanScore > computerScore){
            console.log("The Winner! is.....HUMAN");
        } else if(humanScore < computerScore) {
            console.log("The Winner! is.....COMPUTER")
        } else {
            console.log("IT'S A TIE")
        }
        
    }

    playGame()


