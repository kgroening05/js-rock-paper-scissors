// Create string variable to hold game choice from user
let validChoice;
let rawUserInput
while (validChoice !== true) {
    rawUserInput = getUserChoice()
    validChoice = validateUserChoice(rawUserInput)
    if (validChoice != true){
        alert('Please enter a valid choice.')
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
// Print user choice and computer choice on screen, along with the winner
// Set up for best of 5 rounds - whoever wins 3 rounds first wins the game
// Loop through function to run rounds until there is a winner

// Create integer variable to keep track of computer vs user score
const ROUNDS = 5
// Prompt to play again and reset the tracker variables
