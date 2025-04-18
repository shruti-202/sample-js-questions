const userInput = document.querySelector('#txt-input');
const increaseFontSize = document.querySelector('.inc-font');
const decreaseFontSize = document.querySelector('.dec-font');
const finalOutput = document.querySelector('#output');

let defaultSize = 14

increaseFontSize.addEventListener("click", function incHandler() {
   finalOutput.innerText = userInput.value;
   finalOutput.style.fontSize = `${defaultSize+2}px`
})

decreaseFontSize.addEventListener("click", function decreaseHandler () {
    finalOutput.innerText = userInput.value;
    finalOutput.style.fontSize = `${defaultSize-2}px`
})