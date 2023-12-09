// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("Enter the lenght of the password");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special charcters?");

  // password lengh 8<128

  // lower, upper, number, special

  // validate input

  // generate based on criteria



}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
