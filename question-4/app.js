const userInput = document.querySelector('#user-input');
const btnRed = document.querySelector(".btn-red");
const btnGreen = document.querySelector(".btn-green");
const btnBlue = document.querySelector(".btn-blue");
const finalOutput = document.querySelector("#output");

btnRed.addEventListener("click", function redText() {
    finalOutput.innerText = userInput.value
    finalOutput.style.color = "red";
})

btnGreen.addEventListener("click", function greenText() {
    console.log("clicked")
    finalOutput.innerText = userInput.value;
    finalOutput.style.color = "green";
})

btnBlue.addEventListener("click",function blueText(){
    finalOutput.innerText = userInput.value;
    finalOutput.style.color = "blue"
})
