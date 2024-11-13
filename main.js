// ROCK PAPER SCISSORS PROJECT
var getUserChoice = function (userInput){
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
        return userInput;
    } else {
        return "Please make a valid selection: Rock, paper, or scissors";
    }
}

// COMPUTER SELECTION
var getComputerChoice = function(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

// //  COMPARING RESULTS

function determineWinner (userChoice, computerChoice){

    if (userChoice === computerChoice){
        return "It's a tie!";
    }
//  ROCK
    if (userChoice === "rock"){
        if (computerChoice === "scissors"){
            return "You win! Rock beats scissors!";
        } else {
            return "You lose. Paper beats rock.";
        }
    }
// PAPER
    if (userChoice === "paper"){
        if (computerChoice === "rock"){
            return "You win! Paper beats rock!";
        } else {
            return "You lose. Scissors beats paper.";
        }
    }
// SCISSORS
    if (userChoice === "scissors"){
        if (computerChoice === "paper"){
            return "You win! Scissors beats paper!";
        } else {
            return "You lose. Rock beats scissors.";
        }
    }
} 

function playGame () {
    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice("paper");
    
    console.log("User Choice:", userChoice);
    console.log("Computer Choice:", computerChoice);
    console.log(determineWinner(userChoice, computerChoice));

}
