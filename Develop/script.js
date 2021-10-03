// Assignment code here

// prompt for password length
var promptLength = window.prompt("Choose the quantity of characters for your password. Choose a number between 8 and 128.");
console.log("Password length will be " + promptLength + " characters long.");
var length = parseInt(promptLength);  

  // validate prompt for password length
    if (promptLength < 8 || promptLength > 128 || promptLength === "" || promptLength === null) {
      window.alert("Response is not a valid option. Enter value between 8 and 128.");
    }

// prompt for character selections 
var promptLower = window.confirm("Would you like to include LOWERCASE letters? Select OK for YES, CANCEL for NO.");
    if (promptLower) {
      console.log("Password will include LOWERCASE letters.");
    }
    else {
      console.log("Password will NOT include LOWERCASE letters.");
    }
    var trueLower = (promptLower);

var promptUpper = window.confirm("Would you like to include UPPERCASE values? Select OK for YES, CANCEL for NO.");
    if (promptUpper) {
      console.log("Password will include UPPERCASE letters.");
    }
    else {
      console.log("Password will NOT include UPPERCASE letters.");
    }
    var trueUpper = (promptUpper)

var promptNumeric = window.confirm("Would you like to include NUMERIC values? Select OK for YES, CANCEL for NO.");
    if (promptNumeric) {
      console.log("Password will include NUMERIC values.");
    }
    else {
      console.log("Password will NOT include NUMERIC values.");
    }
    var trueNumeric = (promptNumeric)

  var promptSpecial = window.confirm("Would you like to include SPECIAL characters? Select OK for YES, CANCEL for NO.");
    if (promptSpecial) {
      console.log("Password will include SPECIAL characters.");
    }
    else {
      console.log("Password will NOT include SPECIAL characters.");
    }
    var trueSpecial = (promptSpecial)

// console.log(trueLower, trueUpper, trueNumeric, trueSpecial);

// function to generator password

var finalPassword = generatePassword (length, trueLower, trueUpper, trueNumeric, trueSpecial) 

function generatePassword (length, lowercase, uppercase, numeric, special) {
  var genPassword = "";
  var typeCount = lowercase + uppercase + numeric + special;

  var typeArray = [{lowercase}, {uppercase}, {numeric}, {special}].filter(
    item => Object.values(item)[0]
  );
  console.log(typeArray);

}

var characterSelect = {
  lowercase: genLowercase,
  uppercase: genUppercase,
  numeric: genNumeric,
  special: genSpecial,
}

// generate random number from ASCII char code range of values
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random()*(max-min)+min);
  return value;
}

var genLowercase = function () {
  return String.fromCharCode(randomNumber(97,122));
}
var genUppercase = function () {
  return String.fromCharCode(randomNumber(65,90));
}
var genNumeric = function () {
  return String.fromCharCode(randomNumber(48,57));
}
var genSpecial = function () {
  return String.fromCharCode(randomNumber(33,47));
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