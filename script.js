// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //below are my additions//
  var passwordlength = prompt ("How many characters will you input in your password? Enter a number between 8 and 128");
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

  var promptlower = prompt ("Select a lowercase letter")
  var promptupper = prompt ("Select an uppercase letter")
  var promptnumeric = prompt ("Select a numeric value between 0 and 9")
  var promptspecialchar = prompt ("Select")

  for (var i = 0; i < passwordchar.lowercase.length; i++) {
   for (var j = 0; j < passwordchar.uppercase.length; j++) {
    for (var k = 0; k < passwordchar.numeric.length; k++)    {
     for (var l = 0; l < passwordchar.specialchar.length; l++) {

        if ((promptlower === passwordchar.lowercase[i]) ||
        (promptupper === passwordchar.uppercase[i]) ||
        (promptnumeric === passwordchar.numeric[i]) ||
        (promptspecialchar === passwordchar.specialchar[i])){
            
            return;
            //return password?? not sure (stuck here..NEED HELP!!!)
            // well, I just need help in general
        }

       } 
      }
    }
   } 
      
  

  //below are instructors addtions
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);