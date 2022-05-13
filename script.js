// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChars = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "-" , "_" , "=" , "+"];
var digits = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
var lowerChar = ['a','b','c','d','e','f','g','h','i','j',"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var willHaveSpecial = true;
var willHaveUpper = true;
var willHaveLower = true;
var willHaveDig = true;
var password = "";

// Write password to the #password input


// // Get random lower case letters from my array
// function getLower (){
    
//     var randomLow = Math.floor(Math.random() * lowerChar.length)
//     console.log(lowerChar[randomLow])
// };

// console.log(getLower());


// // get random uppercase letters from my array
// function getUpper (){
    
//     var randomUpper = Math.floor(Math.random() * upperChar.length)
//     console.log(upperChar[randomUpper])
// };

// console.log(getUpper());

// // get random digit from my array

// function getDigit (){
    
//     var randomDigit = Math.floor(Math.random() * digits.length)
//     console.log(digits[randomDigit])
// };

// console.log(getDigit());


// // get random special char from my array

// function getSpecial (){
    
//     var randomSpecial = Math.floor(Math.random() * specialChars.length)
//     console.log( specialChars[randomSpecial])
// };

// console.log(getSpecial());





function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}






var passLength = prompt("How many characters would you like your password to be? enter a number between 8 & 128"); 
if(passLength < 8 || passLength > 128){
    alert("Please pick a number that is between 8 & 128")
   }

var willHaveSpecial = prompt("Will your password have a special character? type yes or no")
if (willHaveSpecial === "no"){
    var willHaveSpecial = false
}
    
var willHaveUpper = prompt("Will your password have upper case letters? type yes or no")
if (willHaveUpper === "no"){
    var willHaveUpper = false
}
  
  
var willHaveLower = prompt("Will your password have lower case letters? type yes or no")
if (willHaveLower === "no"){
    var willHaveLower = false
}

var willHaveDig = prompt("Will your password have digits? type yes or no")
if (willHaveDig === "no"){
    var willHaveDig = false
}

var generatePassword = ( hasDig,hasSpec,hasUpper,hasLower) =>{
    var availableChars = [
        (hasDig ? digits : [] ),
        (hasSpec ? specialChars : [] ),
        (hasUpper ? upperChar : [] ),
        (hasLower ? lowerChar : [] ),

    ];
    console.log(availableChars);

    for (var i = 0; i < passLength; i++){
        var index = Math.floor(Math.random()*availableChars.length);
        password = password + availableChars[index]

    }
       return password; 



    
}



console.log(generatePassword(passLength,willHaveDig,willHaveLower,willHaveUpper,willHaveSpecial));





// function passAll() {
//     for( var i = 0; i < password21.length; i++){
//  var pass =  getUpper() + getLower() + getSpecial() + getDigit(); 
//         console.log(pass);
// }} ;
// console.log(passAll());

// function passNoLower(){

// } ;
// function passNoUpper(){

// } ;
// function passAllNoSpecial(){

// } ;


// function generatePassword(passwordTextLength,willHaveSpecial,willHaveUpper,willHaveLower){

// var passwordTextLength = prompt("How many characters would you like your password to be?");
     

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
