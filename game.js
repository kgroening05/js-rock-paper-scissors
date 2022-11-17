// Create string variable to hold game choice from user
let validChoice;
let rawUserInput;
// Create integer variable to keep track of computer vs user score
let userScore = 0;
let computerScore = 0;
// Set up for best of 5 rounds - whoever wins 3 rounds first wins the game
const ROUNDStoWIN = 3;
const ROUNDS = 5;
// Loop through function to run rounds until there is a winner
function mainGameLoop(){
    for (let currentRound = 1; currentRound <= ROUNDS; currentRound++) {
        while (validChoice !== true) {
            rawUserInput = getUserChoice()
            validChoice = validateUserChoice(rawUserInput)
            if (validChoice != true){
                alert('Please enter a valid choice.')
            }
        }
        validChoice = null
        let computerChoice = getComputerChoice()
        let winner = decideWinner(computerChoice, cleanUserChoice(rawUserInput))

        if (winner === 'computer'){computerScore++}
        else if (winner === 'user'){userScore++}
        else if (winner === 'draw'){currentRound--}
        printPrettyWinnerMessage(winner, currentRound, computerScore, userScore)
        if (computerScore == ROUNDStoWIN){
            currentRound = ROUNDS
            alert('Computer Wins the game!')
        }
        if (userScore == ROUNDStoWIN){
            currentRound = ROUNDS
            alert('You Win the game!')
        }
    }
}
// Prompt to play again and reset the tracker variables
mainGameLoop()
let playAgain;
while (playAgain != false) {
    playAgain = confirm('Play again?')
    if(playAgain){
        currentRound = 1
        validChoice = null
        userScore = 0
        computerScore = 0
        mainGameLoop()
    }
}

// Store input from browser prompt from user in variable
function getUserChoice(){
    let userChoice = prompt('Rock, Paper, or Scissors? ')
    return userChoice
}


// Function to clean user input, removing whitespace and converting to lowercase
function cleanUserChoice(choice){
    let cleanChoice = choice.trim().toLowerCase();
    return cleanChoice
}

// Function to Validate user input to ensure it's a legal choice
function validateUserChoice(choice){
    let cleanChoice = cleanUserChoice(choice)
    if (cleanChoice === 'rock' || cleanChoice === 'paper' || cleanChoice === 'scissors') {
        return true
    }
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
// Define a function to create pretty print messages
function printPrettyWinnerMessage(result, round, computerScore, userScore){
    switch (result) {
        case 'computer':
            alert(`Round ${round}: The computer wins! \nComputer Score: ${computerScore}\nUser Score: ${userScore}`)
            break;
        case 'user':
            alert(`Round ${round}: You Win! \nComputer Score: ${computerScore}\nUser Score: ${userScore}`)
            break;
        case 'draw':
            alert(`Round ${round}: It's a draw! \nComputer Score: ${computerScore}\nUser Score: ${userScore}`)
            break;
        default:
            break;
    }
}





