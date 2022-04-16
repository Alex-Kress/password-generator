// Assignment code here

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["#", "@", "%", "!", "&", "$"];

function generatePassword() {
  var combinedCharacters = [];

  // ask the user how many characters they want in the password
  var passwordLength = prompt("How many characters would you like your password to contain? Password must contain between 8 and 128 characters.");
  // check that the entered password length is within the specified limits
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a password length between 8 and 128 characters.");
    return "";
}
  // ask if they want to use upper case letters
  var useUpperCaseLetters = confirm("Would you like your password to contain uppercase letters?");
  // ask if they want to use lower case letters
  var useLowerCaseLetters = confirm("Would you like your password to contain lowercase letters?");
  // ask if they want to use numbers
  var useNumbers = confirm("Would you like your password to contain numbers?");
  // ask if they want to use special characters
  var useSpecialCharacters = confirm("Would you like your password to contain special characters?")
  // adding upperCaseLetters array to the combinedCharacters array so that upperCaseLetters are used in the generated password
  if (useUpperCaseLetters) {
    combinedCharacters = combinedCharacters.concat(upperCaseLetters);
  }
  // adding lowerCaseLetters array to the combinedCharacters array so that upperCaseLetters are used in the generated password
  if (useLowerCaseLetters) {
    combinedCharacters = combinedCharacters.concat(lowerCaseLetters);
  }
  // adding numbers array to the combinedCharacters array so that upperCaseLetters are used in the generated password
  if (useNumbers) {
    combinedCharacters = combinedCharacters.concat(numbers);
  }
  // adding special characters array to the combinedCharacters array so that upperCaseLetters are used in the generated password
  if (useSpecialCharacters) {
    combinedCharacters = combinedCharacters.concat(specialCharacters);
  }
  if (combinedCharacters.length === 0) {
    alert("You have to choose at least one type of character for your password");
    return "";
  }
  var randomPassword = ""
  // generate password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * combinedCharacters.length);
    randomPassword = randomPassword + combinedCharacters [randomIndex]
  }

  // return random password
  return randomPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
