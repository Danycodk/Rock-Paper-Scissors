// console.log("Is everything good")

//randomyli return : Rock Papper Scissors
const getComputerChoice  = ()=>{
    const months = ["ROCK","PAPER","SCISSORS"];
    const random = Math.floor(Math.random() * months.length);
    //random is the place(number) in the length of the array
    // console.log(random, months[random]);
    const computerSelection = months[random].toLowerCase()
    // return paraCompu
    playRound(playerSelection, computerSelection)
}
let playerSelection;
let playerPoint= 0;
let computerPoint= 0;
let boFiveFirst3Point= playerPoint + computerPoint ;
//Make the player able to choose (rock papper scissors) 
// const playerSelection = ()=>{}
// take the computer chose and player and compare them to return a String(win tie loose)
const playRound= (playerSelection, computerSelection)=>{
    // getComputerChoice(computerSelection)
    playerSelection= prompt("Write your a shape ").toLowerCase()
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        // Tie case
        if (playerSelection == computerSelection) {
            console.log("It is a tie");
            console.log(  playerSelection, computerSelection) ;
            // console.log("Player score "+ " ",playerPoint ,"-" + "the computer score" + " " + computerPoint)
        }
        // Player wins
        else if ((playerSelection == "rock" && computerSelection == "scissors") ||
                 (playerSelection == "paper" && computerSelection == "rock") ||
                 (playerSelection == "scissors" && computerSelection == "paper")) {
            playerPoint++;
            console.log("Player wins!");
            console.log(  playerSelection, computerSelection) ;
            // console.log("Player score "+ " ",playerPoint ,"-" + "the computer score" + " " + computerPoint)
        }
        // Computer wins
        else {
            computerPoint++;
            console.log("Computer wins!");
            console.log(  playerSelection, computerSelection) ;
            // console.log("Player score "+ " ",playerPoint ,"-" + "the computer score" + " " + computerPoint)
        }
    }
    else {
        console.log("Invalid choice! Please choose rock, paper, or scissors.");
    }
    console.log(`Player score: ${playerPoint} - Computer score: ${computerPoint}`);
}
let callFunc ;
//Make there are 5 rounds and display each score untill 5
const playGame= ()=>{
    for(let callFunc=0 ; callFunc < 5; callFunc++ ){
        getComputerChoice(callFunc)

    }

}



playGame()