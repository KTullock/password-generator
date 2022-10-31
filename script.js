// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var userInput = prompt("How many characters do you want in your password?")
  var length = parseInt(userInput)

    if (isNaN(length)) {
    alert("Please enter a number.")
    return
  }

  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128.")
    return
  }

  var needLowercase = prompt("Do you need lowercase letters? Enter 'true' or 'false'.");
  var needUppercase = prompt("Do you need uppercase letters? Enter 'true' or 'false'.");
  var needNumeric = prompt("Do you need numbers? Enter 'true' or 'false'.");
  var needSpecial = prompt("Do you need special characters? Enter 'true' or 'false'.");

  var outputLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var outputUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var outputNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var outputSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_"]

  var charContainer = []

  if (needLowercase === true) {
    charContainer.push(outputLowercase)
  }

  if (needUppercase === true) {
    charContainer.push(outputUppercase)
  }

  if (needNumeric === true) {
    charContainer.push(outputNumeric)
  }

  if (needSpecial === true) {
    charContainer.push(outputSpecial)
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
