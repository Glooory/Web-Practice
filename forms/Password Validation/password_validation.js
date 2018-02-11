var password = document.getElementById("password");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var length = document.getElementById("length");

password.onfocus = function() {
    document.getElementById("messages").style.display = "block";
}

password.onblur = function() {
    document.getElementById("messages").style.display = "none";
}

password.onkeyup = function() {
    var lowercaseLetters = /[a-z]/g;
    var uppercaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    validateElement(lowercase, password.value.match(lowercaseLetters));
    validateElement(uppercase, password.value.match(uppercaseLetters));
    validateElement(number, password.value.match(numbers));
    validateElement(length, password.value.length > 8);
}

function validateElement(element, valid) {
    if (valid) {
        element.classList.remove("invalid");
        element.classList.add("valid");
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
    }
}