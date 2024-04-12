function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoiceIndex = Math.floor(Math.random() * choices.length);
    return choices[randomChoiceIndex];
}

// console.log(getComputerChoice());

function playRPS(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats scissors";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats rock";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors";
    }
    else if (playerSelection === computerSelection) {
        return "Draw. Play again.";
    }
}

function playGame() {
    let userWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let usersChoice = prompt("Enter rock, paper or scissors: ");
        let computersChoice = getComputerChoice();
        console.log(`Round number ${i+1}:`);
        console.log(`Users choice: ${usersChoice}`);
        console.log(`Computers choice: ${computersChoice}`);
        if (playRPS(usersChoice, computersChoice).includes("You Win")) {
            userWins += 1;
            console.log("You Win this round.");
        }
        else if (playRPS(usersChoice, computersChoice).includes("You Lose")) {
            computerWins += 1;
            console.log("You Lose this round.");
        }
        else if (playRPS(usersChoice, computersChoice).includes("Draw")) {
            console.log("This round is a draw.");
        }
    }
    if (userWins > computerWins) {
        return("\nYou won the game!");
    }
    else if (computerWins > userWins) {
        return("\nComputer won the game!");
    }
    else {
        return("It is a draw!");
    }
}
// let computersChoice = getComputerChoice();
// console.log(computersChoice + "\n");
// console.log(playRPS("paper", computersChoice));

console.log(playGame());