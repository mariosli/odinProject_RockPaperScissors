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

function playGame(usersChoice) {

    let computersChoice = getComputerChoice();
    // console.log(`Round number ${counter+1}:`);
    counter++;

    const checkDisplayResult = document.querySelector("#displayRes");
    if (checkDisplayResult) {
        checkDisplayResult.remove();
    }

    const displayResult = document.createElement("div");
    displayResult.setAttribute("id", "displayRes");
    const userPlayed = document.createElement("p");
    userPlayed.textContent = `Users choice: ${usersChoice}`;
    const compPlayed = document.createElement("p");
    compPlayed.textContent = `Computers choice: ${computersChoice}`;
    displayResult.appendChild(userPlayed);
    displayResult.appendChild(compPlayed);

    document.body.appendChild(displayResult);

    if (playRPS(usersChoice, computersChoice).includes("You Win")) {
        userWins += 1;
        let roundWinner = document.createElement("p");
        roundWinner.textContent = "User wins this round";
        displayResult.appendChild(roundWinner);
    }
    else if (playRPS(usersChoice, computersChoice).includes("You Lose")) {
        computerWins += 1;
        let roundWinner = document.createElement("p");
        roundWinner.textContent = "Computer wins this round";
        displayResult.appendChild(roundWinner);
        //console.log("You Lose this round.");
    }
    else if (playRPS(usersChoice, computersChoice).includes("Draw")) {
        let roundWinner = document.createElement("p");
        roundWinner.textContent = "This round is a draw";
        displayResult.appendChild(roundWinner);
        // console.log("This round is a draw.");
        
    }

    let score = document.createElement("p");
    score.textContent = `The score is: User ${userWins} : ${computerWins} Computer`
    displayResult.appendChild(score);

    if (userWins > computerWins && userWins === 5) {
        return "User won";
    }
    else if (computerWins > userWins && computerWins === 5) {
        return "Computer won";
    }
}

function handleButtonClick(usersChoice) {
    const result = playGame(usersChoice);
    if (result === "User won") {
        if(alert(`${result} the game. Thank you for playing.`)){}
        else    window.location.reload(); 
    }
    else if(result === "Computer won") {
        if(alert(`${result} the game. Thank you for playing.`)){}
        else    window.location.reload(); 
    }
}

let counter = 0;
let userWins = 0;
let computerWins = 0;


// let computersChoice = getComputerChoice();
// console.log(computersChoice + "\n");
// console.log(playRPS("paper", computersChoice));

// console.log(playGame());