// Create string variable to hold game choice from user
// Store input from browser prompt from user in variable
let userChoice = prompt('Rock, Paper, or Scissors? ')
alert(userChoice)
alert(getComputerChoice())
// Create string variable to hold game choice from computer function
// Write function to randomly select computer game choice and save in variable

function getComputerChoice(){
    let numberCap = 3
    let randomChoice = Math.floor(Math.random() * numberCap);
    return randomChoice
}
// Compare user choice to computer choice to determine winner
// Print user choice and computer choice on screen, along with the winner