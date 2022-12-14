
// Create integer variable to keep track of computer vs user score
let userScore = 0;
let computerScore = 0;
let currentRound = 0;

// Set up for best of 5 rounds - whoever wins 3 rounds first wins the game
const ROUNDStoWIN = 3;
const ROUNDS = 5;

// Get button clicked
const gameButtons = document.querySelectorAll(".gameChoice");
gameButtons.forEach(choice => {choice.addEventListener("click",mainGameLoop)});



// Run the game
function mainGameLoop(event){
    const userChoice = event.target.getAttribute('data-choice');
    let computerChoice = getComputerChoice();
    let winner = decideWinner(computerChoice, userChoice);
    scoreHandler(winner);
    displayScore();
    winnerChecker();

}

// Function to show score on the screen
function displayScore(){
    const userScoreDisplay = document.querySelector('.userScore')
    const computerScoreDisplay = document.querySelector('.computerScore')
    userScoreDisplay.innerHTML = `You: ${userScore}`
    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`
}

// Function to reset the game
function resetGame(){
    currentRound = 0;
    userScore = 0;
    computerScore = 0;
    displayScore();
}

// Function to check for a winner
function winnerChecker(){
    if (computerScore !== ROUNDStoWIN && userScore !== ROUNDStoWIN){
        return
    }
    const modal = document.querySelector(".modal");
    const resetBtn = document.querySelector(".resetGameButton");
    const winnerMessage = document.querySelector(".gameWinner");

    if (computerScore == ROUNDStoWIN){
        winnerMessage.innerHTML = "Computer Wins!";
    }
    if (userScore == ROUNDStoWIN){
        winnerMessage.innerHTML = "You Win!";
    }
    modal.style.display = "block";
    resetBtn.addEventListener("click",()=>{
        modal.style.display = "none";
        resetGame();
    })
}

// Function to increment scores depending on who won
function scoreHandler(winner){
    if (winner === 'computer'){computerScore++}
    else if (winner === 'user'){userScore++}
    else if (winner === 'draw'){currentRound--}
}

// Create string variable to hold game choice from computer function
function getComputerChoice(){
    choiceInteger = generateRandomInt()
    switch (choiceInteger) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2: 
            return 'scissors'
        default:
            alert('Error with random number generation')
    }
}

// Write function to randomly select computer game choice and save in variable
function generateRandomInt(){
    let numberCap = 3
    let randomChoice = Math.floor(Math.random() * numberCap);
    return randomChoice
}

// Compare user choice to computer choice to determine winner
function decideWinner(computerChoice, userChoice){
    if (computerChoice === userChoice){
        return 'draw'
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors'){
        return 'computer'
    }
    else if (computerChoice === 'paper' && userChoice === 'rock'){
        return 'computer'
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper'){
        return 'computer'
    }
    else{
        return 'user'
    }
}






