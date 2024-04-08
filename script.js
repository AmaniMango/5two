let div = document.querySelector("div");
let submit = document.querySelector("button");
let greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Konnichiwa"];


submit.addEventListener("click", function() {
    let userInput = document.querySelector("input").value;


    // Do Now: Complete tasks 1-5.

    if (userInput === "English") {
        div.innerHTML = greetings[0]; // 1. Replace empty string with correct array element
    } else if (userInput === "Spanish") {
        div.innerHTML = greetings[1]; // 2. Replace empty string with correct array element
    } else if (userInput === "French") {
        div.innerHTML = greetings[2]; // 3. Replace empty string with correct array element
    } else if (userInput === "German") {
        div.innerHTML = greetings[3]; // 4. Replace empty string with correct array element
    } else if (userInput === "Japanese") {
        div.innerHTML = greetings[4]; // 5. Replace empty string with correct array element
    } else {
        div.innerHTML = "Apologies, I do not support that language.";
    }

});