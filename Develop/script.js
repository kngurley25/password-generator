// Assignment code here

// function to generator password
var generatePassword = function() {

  // prompt for password length
  var promptLength = window.prompt("Choose the quantity of characters for your password. Choose a number between 8 and 128.");
    // validate prompt for password length
    if (promptLength < 8 || promptLength > 128 || promptLength === "" || promptLength === null) {
      window.alert("Response is not a valid option. Enter value between 8 and 128.");
      return generatePassword();
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
