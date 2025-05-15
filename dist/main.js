"use strict";
const message = "Bonjour depuis TypeScript !";
console.log(message);
const monElement = document.getElementById("monElement");
if (monElement) {
    monElement.textContent = message;
}
