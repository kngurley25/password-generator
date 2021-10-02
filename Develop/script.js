// Assignment code here

// ASCII character codes
var lowerCase = characterArray (97, 122)
var upperCase = characterArray (65, 90)
var numeric = characterArray (48, 57)
var special = characterArray (33, 47)

  // prompt for password length
  var promptLength = window.prompt("Choose the quantity of characters for your password. Choose a number between 8 and 128.");
  console.log("Password length will be " + promptLength + " characters long.");
  
  // validate prompt for password length
    if (promptLength < 8 || promptLength > 128 || promptLength === "" || promptLength === null) {
      window.alert("Response is not a valid option. Enter value between 8 and 128.");
      return generatePassword();
    }

  // prompt for character selections
  var promptCharacterLower = window.confirm("Would you like to include LOWERCASE letters for added security? Select OK for YES, CANCEL for NO.");
    if (promptCharacterLower) {
      console.log("Password will include LOWER letters.");
    }
    else {
      console.log("Password will NOT include LOWER letters.");
    }
  
  var promptCharacterUpper = window.confirm("Would you like to include UPPERCASE letters for added security? Select OK for YES, CANCEL for NO.");
    if (promptCharacterUpper) {
      console.log("Password will include UPPERCASE letters.");
    }
    else {
      console.log("Password will NOT include UPPERCASE letters.");
    }

  var promptCharacterNumeric = window.confirm("Would you like to include NUMERIC values for added security? Select OK for YES, CANCEL for NO.");
    if (promptCharacterNumeric) {
      console.log("Password will include NUMERIC values.");
    }
    else {
      console.log("Password will NOT include NUMERIC values.");
    }

  var promptCharacterSpecial = window.confirm("Would you like to include SPECIAL characters for added security? Select OK for YES, CANCEL for NO.");
    if (promptCharacterSpecial) {
      console.log("Password will include SPECIAL characters.");
    }
    else {
      console.log("Password will NOT include SPECIAL characters.");
    }

// function to loop through characters
var characterArray = function(max, min) {
  for (var i=min; i <=max; i++) {
    characterArray.push(i);
  }
  return characterArray;
}

// function to generator password
var generatePassword = function() {
  var 
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
