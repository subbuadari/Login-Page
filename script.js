var btn = document.querySelector("button");
var gmail = document.getElementById("gmail");
var password = document.getElementById("password");

btn.onclick = function(event) {
    event.preventDefault();

    if (gmail.value === "" || password.value === "") {
        alert("Please enter Gmail and Password");
    } else {
        alert("Login Successful!");
    }
};