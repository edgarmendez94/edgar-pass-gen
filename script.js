const button = document.querySelector("#passGen");

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let specialChars = "'<=>?@+,_`{|}~-./:;^()[]!#$%&*";
let numberChars = "1234567890";

button.addEventListener("click", writePass);

function writePass(){
    const pass = generatePass();
    var passText = document.querySelector("#pass");
    passText.value = pass;
}

function generatePass(){
    let passLength = Math.floor(prompt("Type how long you want your password to be from 8 - 128"));

    if (!isNaN(passLength) && passLength >= 8 && passLength <=128){
        let specials = confirm("Would you like to include special characters?");
        let upper = confirm("Would you like to include uppercase characters?");
        let lower = confirm("Would you like to include lowercase characters?");
        let numbers = confirm("Would you like to include numbers?");

        if( !specials && !upper && !lower && !numbers){
            alert("Choose at least 1 option");
        }else {
            var password = [""];
            var charsSelected = "";

            if (specialChars) {
                charsSelected += specialChars;
              }
              if (numberChars) {
                charsSelected += numberChars;
              }
              if (upperChars) {
                charsSelected += upperChars;
              }
              if (lowerChars) {
                charsSelected += lowerChars;
              }
              var charsSelected = charsSelected.split("");


              for (var i = 0; i < passLength; i++){
                password = password.concat(charsSelected[Math.floor(Math.random() * charsSelected.length)]);
              }
              return password.join("");

        }
    } else{
        alert("Try again");
        generatePass()
    }

}