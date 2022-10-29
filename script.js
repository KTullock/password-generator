// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = prompt("How many characters do you want in your password?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    alert("Please enter a number.")
    //MAY NEED TO ADD A "return"
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.")
    //MAY NEED TO ADD A "return"
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
