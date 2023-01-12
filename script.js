// Array of special characters to be included in password
var specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    var characterTypesLowerCase = confirm(
      "Would you like lowercase characters in your password?"
    );
    var characterTypesUpperCase = confirm(
      "Would you like UPPERCASE characters in your password?"
    );
    var characterTypesNumeric = confirm(
      "Would you like numbers 1-9 in your password?"
    );
    var characterTypesSpecialCharacters = confirm(
      "Would you like special characters $%@& in your password?"
    );
    var all = [];
    if (characterTypesLowerCase === true) {
      all.push(...lowerCasedCharacters);
      //console.log("Adding lowerCase")
    }
    if (characterTypesUpperCase === true) {
      all.push(...upperCasedCharacters);
      //console.log("Adding upperCase")
    }
    if (characterTypesNumeric === true) {
      all.push(...numericCharacters);
      //console.log("Adding numbers");
    }
    if (characterTypesSpecialCharacters === true) {
      all.push(...specialCharacters);
      //console.log("Adding specialCharacters")
    } //else {
    //console.log("The length of password should be at least 10 characters but no more than 64. At least one character type should be selected.");
  
    return all;
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var pool = getPasswordOptions();
  
    if (pool.length === 0) {
      return alert("Please choose at least one type of characters!");
    }
  
    var lengthOfPassword = prompt(
      "How many characters would you like in your password? The length of password should be at least 10 characters but no more than 64."
    );
  
    lengthOfPassword = parseInt(lengthOfPassword, 10);
  
    if (lengthOfPassword < 10 || lengthOfPassword > 65 || !lengthOfPassword) {
      return alert("Please choose a password between 10 and 65 characters");
    }
  
    var genAnswer = "";
  
    for (var i = 0; i < lengthOfPassword; i++) {
      genAnswer += pool[Math.floor(Math.random() * pool.length)];
    }
  
    return genAnswer;
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var answer = getRandom();
    return answer;
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