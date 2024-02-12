




if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    // Tie case
    if (playerSelection == computerSelection) {
        console.log("It is a tie");
    }
    // Player wins
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
             (playerSelection == "paper" && computerSelection == "rock") ||
             (playerSelection == "scissors" && computerSelection == "paper")) {
        playerPoint++;
        console.log("Player wins!");
    }
    // Computer wins
    else {
        computerPoint++;
        console.log("Computer wins!");
    }
}