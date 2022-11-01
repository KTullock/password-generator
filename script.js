// Assignment Code
var generateBtn = document.querySelector("#generate");

//randomizes the any characters listed
function randomNum(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomChar(list) {
  return list[randomNum(list.length)]
}

function generatePassword() {

  while (true) {
    var userInput = prompt("How many characters do you want in your password?")
    
    // if the user enters nothing, the prompt is removed
    if (userInput === null) {
      return
    }

    //converts userInput into a usable integer
    var length = parseInt(userInput)

    //if the userInput is not a number or < 8 or >128, the user will be propted with the following message(s)
    if (isNaN(length)) {
    alert("Please enter a number.")
    } else if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128.")
   } else {
    break
  }
  }
  
  //a list of questions prompted to the user
  var needLowercase = confirm("Do you need lowercase letters? Click 'OK' for yes or 'Cancel' for no.");
  var needUppercase = confirm("Do you need uppercase letters? Click 'OK' for yes or 'Cancel' for no.");
  var needNumeric = confirm("Do you need numbers? Click 'OK' for yes or 'Cancel' for no.");
  var needSpecial = confirm("Do you need special characters? Click 'OK' for yes or 'Cancel' for no.");

  //an array of characters to be randomly selected
  var outputLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var outputUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var outputNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var outputSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_"]

  var charContainer = []

  //determines what needs to be included in the password depending on userInput
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

  var passwordOutput = ""

  for (var i = 0; i < length; i++){
    var randomNeed = getRandomChar(charContainer)
    var randomChar = getRandomChar(randomNeed)
    passwordOutput += randomChar
  }

  return passwordOutput
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
