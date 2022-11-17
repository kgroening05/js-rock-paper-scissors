// Create string variable to hold game choice from user
// Store input from browser prompt from user in variable
function getUserChoice(){
    let userChoice = prompt('Rock, Paper, or Scissors? ')
    return userChoice
}

alert(userChoice)
alert(getComputerChoice())

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
// Write function to randomly select computer game choice and save in variable

function getComputerChoice(){
    let numberCap = 3
    let randomChoice = Math.floor(Math.random() * numberCap);
    return randomChoice
}
// Compare user choice to computer choice to determine winner
// Print user choice and computer choice on screen, along with the winner
// Set up for best of 5 rounds - whoever wins 3 rounds first wins the game
// Loop through function to run rounds until there is a winner
// Create integer variable to keep track of computer vs user score
// Prompt to play again and reset the tracker variables
