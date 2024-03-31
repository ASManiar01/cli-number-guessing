#! /usr/bin/env node
import inquirer from "inquirer";
// 1. Computer will generate a random number
// Math.random() function generates number in decimals from 0.00 to 0.99...
// Math.floor() function will round off the random number to lower side i.e. 0.33 to 0
// So we multiply the random number by number will be generated b/w 0 and 99 and by adding 1,
// Now the number will be generated b/w 1 and 100 and then passing to Math.floor() function
const randomNumber = Math.floor(Math.random() * 100 + 1);
// 2. User give numeric input for guessing number
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 and 100: ",
    },
]);
// 3. Compare user input with computer generated number and show result
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the correct number");
}
else {
    console.log("Sorry! You guessed a wrong number");
}
