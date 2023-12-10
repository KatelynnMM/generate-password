// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("Enter the lenght of the password");

  while (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128 for the password length.");
    length = prompt("Enter the length of the password");
  }



  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special charcters?");




  var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];




  var charSet = [];

  if (includeUppercase) {
    charSet = charSet.concat(uppercaseChars);
  }

  if (includeLowercase) {
    charSet = charSet.concat(lowercaseChars);
  }

  if (includeNumeric) {
    charSet = charSet.concat(numericChars);
  }

  if (includeSpecial) {
    charSet = charSet.concat(specialChars);
  }

  if (charSet.length === 0) {
    alert("Please include at least one character set for the password.");
    return generatePassword(); // Restart the function if no character set is selected
  }

  var password = "";
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
