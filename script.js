// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChars = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "-" , "_" , "=" , "+"];
var digits = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
var lowerChar = ['a','b','c','d','e','f','g','h','i','j',"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var selection = [];

// Write password to the #password input


// Get random lower case letters from my array
function getLower (){
    
    var randomLow = Math.floor(Math.random() * lowerChar.length)
    console.log(lowerChar[randomLow])
};

console.log(getLower());

// get random uppercase letters from my array
function getUpper (){
    
    var randomUpper = Math.floor(Math.random() * upperChar.length)
    console.log(upperChar[randomUpper])
};

console.log(getUpper());

// get random digit from my array

function getDigit (){
    
    var randomDigit = Math.floor(Math.random() * digits.length)
    console.log(digits[randomDigit])
};

console.log(getDigit());


// get random special char from my array

function getSpecial (){
    
    var randomSpecial = Math.floor(Math.random() * specialChars.length)
    console.log( specialChars[randomSpecial])
};

console.log(getSpecial());





function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}

//   for (var i = 0; i < passwordTextLength; i++) {
    
    
    
// }


// }


function generatePassword(passwordTextLength,willHaveSpecial,willHaveUpper,willHaveLower){

var passwordTextLength = prompt("How many characters would you like your password to be?");
    if(passwordTextLength < 8){
     alert("Please pick a number that is 8 or greater")
    } 
var willHaveSpecial = prompt("Will your password have a special character? type yes or no")
    
var willHaveUpper = prompt("Will your password have upper case letters? type yes or no")
  
var willHaveLower = prompt("Will your password have lower case letters? type yes or no")
   
if (willHaveSpecial === yes && willHaveUpper === yes && willHaveLower === yes ){
    selection = specialChars.concat(digits,lowerChar,upperChar)
    
}else if (willHaveSpecial === yes && willHaveUpper === no && willHaveLower === yes){   
    selection = specialChars.concat(digits,lowerChar,)
}
else if (willHaveSpecial === yes && willHaveUpper === no && willHaveLower === no){   
    selection = specialChars.concat(digits)
}
else if (willHaveSpecial === no && willHaveUpper === no && willHaveLower === no){   
    selection = digits
}
else if (willHaveSpecial === no && willHaveUpper === yes && willHaveLower === yes){   
    selection = upperChar.concat(digits,lowerChar,)
}
else if (willHaveSpecial === yes && willHaveUpper === yes && willHaveLower === no){   
    selection = lowerChar.concat(digits)
}
else if (willHaveSpecial === no && willHaveUpper === yes && willHaveLower === no){   
    selection = specialChars.concat(digits,lowerChar,)
}


}

 





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
