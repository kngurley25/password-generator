// Assignment code here

// function to generator password
var generatePassword = function() {

  // prompt for password length
  var promptLength = window.prompt("Choose the quantity of characters for your password. Choose a number between 8 and 128.");
  console.log("Password length will be " + promptLength + " characters long.");
  
  // validate prompt for password length
    if (promptLength < 8 || promptLength > 128 || promptLength === "" || promptLength === null) {
      window.alert("Response is not a valid option. Enter value between 8 and 128.");
      return generatePassword();
    }

  // prompt for character selections
  var promptCharacterUpper = window.confirm("Default password will be LOWERCASE letters. Would you like to include UPPERCASE letters for added security?");
    if (promptCharacterUpper) {
      console.log("Password will include UPPERCASE letters.");
    }
    else {
      console.log("Password will NOT include UPPERCASE letters.");
    }

  var promptCharacterNumeric = window.confirm("Default password will be LOWERCASE letters. Would you like to include NUMERIC values for added security?");
    if (promptCharacterNumeric) {
      console.log("Password will include NUMERIC values.");
    }
    else {
      console.log("Password will NOT include NUMERIC values.");
    }

  var promptCharacterSpecial = window.confirm("Default password will be LOWERCASE letters. Would you like to include SPECIAL characters for added security?");
    if (promptCharacterSpecial) {
      console.log("Password will include SPECIAL characters.");
    }
    else {
      console.log("Password will NOT include SPECIAL characters.");
    }
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
