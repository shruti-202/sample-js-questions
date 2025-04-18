const userInput = document.querySelector("#user-input");
const firstHeading = document.querySelector(".heading-one");
const secondHeading = document.querySelector(".heading-two");
const thirdHeading = document.querySelector(".heading-three");
const finalOutput = document.querySelector("#output");

let defaultHeading = 30;

firstHeading.addEventListener("click", function h1Text() {
  finalOutput.innerHTML = `<h1>${userInput.value}</h1>`;
});

secondHeading.addEventListener("click", function h2Text() {
    finalOutput.innerHTML = `<h2>${userInput.value}</h2>`
});

thirdHeading.addEventListener("click", function h3Text() {
    finalOutput.innerHTML = `<h3>${userInput.value}</h3>`
})
