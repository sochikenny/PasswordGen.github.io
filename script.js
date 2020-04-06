// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passwordlength = prompt("How many characters will you input in your password? Enter a number between 8 and 128");
  var passwordchar = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      specialchar: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "
  }
  passwordchar.lowercase = passwordchar.lowercase.split("");  
  passwordchar.uppercase = passwordchar.uppercase.split("");
  passwordchar.numeric = passwordchar.numeric.split("");
  passwordchar.specialchar = passwordchar.specialchar.split("");

  var promptlower = confirm ("Do you want a lowercase letter?")
  var promptupper = confirm ("Do you want an uppercase letter?")
  var promptnumeric = confirm ("Do you want a numeric value?")
  var promptspecialchar = confirm (" Do you want a special charater? For ex: !#$%&'()*+,-./:;<=>?@[\]^_`{|}~  ")
  

  var result = "";
  for (var i = 0; i < Number(passwordlength); i++) {
    if (promptlower){
      var lc = passwordchar.lowercase[Math.floor(Math.random()* passwordchar.lowercase.length)];
       result += lc
    }

    if (promptupper) {
      var uc = passwordchar.uppercase[Math.floor(Math.random()* passwordchar.uppercase.length)];
      result += uc
    }

    if (promptnumeric) {
      var num = passwordchar.numeric[Math.floor(Math.random()* passwordchar.numeric.length)];
      result += num
    }

    if (promptspecialchar){
      var sc = passwordchar.specialchar[Math.floor(Math.random()* passwordchar.specialchar.length)];
      result += sc
    }
    

  }

      return result
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerText = password;

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);