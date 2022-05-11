// 1. Setting the player and computer score to 0
let playerScore = 0
let computerScore = 0

// 2. Creating functions for the choices of both computer and user. The computer selects at random from a list of 3 choices and returns that value. The user's choice comes from the prompt and returns that value.
function computerPlay() {
    const items = ["rock", "paper", "scissors"]
    const x = items[Math.floor(Math.random()*items.length)];
    return x
}
// 2.1. We make sure to turn the prompt toLowerCase() to make the user's input case insesitive. We could've done this with toUpperCase as well.
function playerPlay() {
    const y = prompt("Rock, Paper or Scissors?").toLowerCase()
    return y
}


// 3.The playRound function:
function playRound() {
    // 3.1. Here we set both the player selection and computer selection to match the previous functions on 2.
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    // 3.2. We then procceed with setting up the if statements for a tie, a player win or a computer win. We make sure to add to the count of the user or the computer score.
    if (playerSelection === computerSelection) {
        console.log("Tie")
    } 

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        console.log("You win the round!")
        playerScore++
        console.log(playerScore)
    }

    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ) {
        console.log("Computer wins the round!")
        computerScore++
        console.log(computerScore)
    }
    // 3.3. At the end we run the checkwinner() function to check if we have a winner and if we need to run the playRound() function once again.
    checkwinner();
}   

// 4. This function will check the score of both user and computer and decide if it needs to run the playRound() function again.
function checkwinner () {
    if (playerScore === 3) {
        console.log("You win the game!")
    }
    else if (computerScore === 3) {
        console.log("The computer wins the game!")
    }
    else {
        playRound();
    }
} 

// 5. Finally we log the function and let the loop start.
console.log(checkwinner());

