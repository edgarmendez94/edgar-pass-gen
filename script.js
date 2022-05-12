// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChars = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "-" , "_" , "=" , "+"];
var digits = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
var lowerChar = ['a','b','c','d','e','f','g','h','i','j',"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}


function generatePassword(passwordTextLength,willHaveSpecial,willHaveUpper,willHaveLower){

var passwordTextLength = prompt("How many characters would you like your password to be?");
    if(passwordTextLength < 8){
     alert("Please pick a number that is 8 or greater")
    } 
var willHaveSpecial = prompt("Will your password have a special character? type yes or no")
    
var willHaveUpper = prompt("Will your password have upper case letters? type yes or no")
  
var willHaveLower = prompt("Will your password have lower case letters? type yes or no")
   
if (willHaveSpecial === yes && willHaveUpper === yes && willHaveLower === yes ){

  
}else if (willHaveSpecial === yes && willHaveUpper === no && willHaveLower === yes){   

}



}

 


// for (var i = 0; i < passwordTextLength; i++) {
    
//     console.log("This is the current value of i: " + i + ".");
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
