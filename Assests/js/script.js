// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  bigletters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  spcl: ["!", "@", "#", "%", "^", "&", "(", ")"]
}


// Write password to the #password input
function writePassword() {
  const passwordText = document.querySelector("#password");

  // user inputs for password requirements
  var inputs = {
    lengthmin: parseInt(prompt("Enter min amount of characters")),
    lengthmax: parseInt(prompt("Enter max amount of characters")),
    lowcase: confirm("Include lowercase letters?"),
    upcase: confirm("Include uppercase letters?"),
    digits: confirm("Include numbers?"),
    spcl: confirm("Include special characters?")
  };

  if (inputs.lengthmin >= 0 && inputs.lengthmax >= inputs.lengthmin) {


    // create random password length based on min & max inputs
    var length = Math.floor(Math.random() * (inputs.lengthmax - inputs.lengthmin + 1)) + inputs.lengthmin;

    // include required characters based on user inputs
    var slctdchar = [];
    if (inputs.lowcase) {
      slctdchar = slctdchar.concat(characters.letters);
    }

    if (inputs.upcase) {
      slctdchar = slctdchar.concat(characters.bigletters);
    }

    if (inputs.digits) {
      slctdchar = slctdchar.concat(characters.digits);
    }

    if (inputs.spcl) {
      slctdchar = slctdchar.concat(characters.spcl);
    }

    if (slctdchar.length === 0) {
      alert("INVALID INPUT: AT LEAST ONE SET OF CHARACTERS HAS TO BE SELECTED");
    }

    // create random number array to select characters from array
    const randomarray = Array(length)
      .fill()
      .map(() => Math.floor(slctdchar.length * Math.random())); // numbers from 0-amount of required characters

    //  use array to select random characters
    var password = randomarray.map(pickpassword)
    function pickpassword(num) {
      return slctdchar[num]
    }
    console.log(password);
    // join array into a str and output
    passwordText.value = password.join('');

  } else {
    alert("INVALID MAX-MIN CHARACTER INPUTS");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

